import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import ts from "typescript";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../src");
const nativeRequire = createRequire(import.meta.url);
const cache = new Map();
// Load the actual TypeScript data without a test framework or generated fixtures.
function load(file) {
  const path = resolve(root, /\.tsx?$/.test(file) ? file : file + (existsSync(resolve(root, file + ".ts")) ? ".ts" : ".tsx"));
  if (cache.has(path)) return cache.get(path).exports;
  const module = { exports: {} };
  cache.set(path, module);
  const source = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      jsx: ts.JsxEmit.ReactJSX,
    },
  }).outputText;
  const require = (name) =>
    name.startsWith("@/")
      ? load(name.slice(2))
      : name.startsWith(".")
        ? load(resolve(dirname(path), name))
        : nativeRequire(name);
  new Function("require", "module", "exports", source)(
    require,
    module,
    module.exports,
  );
  return module.exports;
}
const { programs, programPath, weeks } = load("data/programs");

test("published API service example handles success, HTTP errors and invalid JSON contracts", async () => {
  const guide = load("data/guides").publicGuideBySlug("como-consumir-api-rest-react");
  const source = guide.article.find((section) => section.command?.startsWith("export async function")).command;
  const module = { exports: {} };
  const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  new Function("exports", compiled)(module.exports);
  const originalFetch = global.fetch;
  const signal = new AbortController().signal;
  try {
    global.fetch = async (url, options) => {
      assert.equal(url, "/api/productos");
      assert.equal(options.signal, signal);
      return { ok: true, json: async () => [{ id: 1, nombre: "Libro" }] };
    };
    assert.deepEqual(await module.exports.obtenerProductos(signal), [{ id: 1, nombre: "Libro" }]);
    global.fetch = async () => ({ ok: false, status: 500 });
    await assert.rejects(module.exports.obtenerProductos(signal), /HTTP 500/);
    global.fetch = async () => ({ ok: true, json: async () => [{ id: 1 }] });
    await assert.rejects(module.exports.obtenerProductos(signal), /Respuesta inesperada/);
    global.fetch = async () => ({ ok: true, json: async () => [] });
    assert.deepEqual(await module.exports.obtenerProductos(signal), []);
  } finally { global.fetch = originalFetch; }
});

test("six editorial guides render related links, exact SEO titles and React CTAs", async () => {
  const { publicGuides, publicGuideBySlug } = load("data/guides");
  const { renderToStaticMarkup } = nativeRequire("react-dom/server");
  const newSlugs = ["como-funciona-un-pull-request", "git-y-github-para-principiantes", "que-debe-saber-un-frontend-junior", "javascript-o-react-que-aprender-primero", "como-consumir-api-rest-react", "portfolio-desarrollador-frontend"];
  const oldSlugs = ["instalar-vscode", "instalar-git", "instalar-node", "crear-github", "configurar-git", "primer-repositorio", "primer-pull-request", "instalar-postman", "instalar-docker"];
  assert.deepEqual(publicGuides.map((g) => g.slug).sort(), [...newSlugs, ...oldSlugs].sort());
  for (const slug of newSlugs) {
    const guide = publicGuideBySlug(slug);
    assert.equal(guide.visibility, "public");
    assert.equal(guide.programSlug, "frontend-react");
    assert.ok(guide.article.length >= 7);
    assert.ok(guide.seoTitle);
    const metadata = load("lib/guide-metadata").guideMetadata(guide);
    assert.equal(metadata.title, guide.seoTitle);
    assert.equal(metadata.openGraph.title, guide.seoTitle);
    assert.equal(metadata.twitter.title, guide.seoTitle);
    const html = renderToStaticMarkup(await load("app/guias/[slug]/page.tsx").default({ params: Promise.resolve({ slug }) }));
    assert.ok(html.includes('href="/programas/frontend-react"'));
    assert.ok(!html.includes("Te ayudamos a dejar tu entorno listo"));
    for (const related of guide.relatedSlugs) {
      assert.notEqual(related, slug);
      assert.ok(publicGuideBySlug(related), related);
      assert.ok(html.includes(`href="/guias/${related}"`));
    }
    if (guide.secondaryProgramSlug) assert.ok(html.includes('href="/programas/desde-cero"'));
  }
});

test("public guides generate routes, metadata and schemas without exposing campus guides", async () => {
  const { publicGuides, publicGuideBySlug } = load("data/guides");
  const page = load("app/guias/[slug]/page.tsx");
  const legacy = load("app/campus/guias/[slug]/page.tsx");
  assert.equal(publicGuides.length, 15);
  assert.equal(page.generateStaticParams().length, 15);
  assert.equal(legacy.generateStaticParams().length, 15);
  assert.ok(load("app/guias/page.tsx").default);
  for (const guide of publicGuides) {
    assert.equal(guide.visibility, "public");
    assert.ok(programs.some((p) => p.slug === guide.programSlug));
    const metadata = await page.generateMetadata({ params: Promise.resolve({ slug: guide.slug }) });
    assert.equal(metadata.alternates.canonical, `/guias/${guide.slug}`);
    assert.equal(metadata.robots.index, true);
    assert.equal(metadata.description, guide.description);
    const schema = load("lib/guide-metadata").guideSchema(guide);
    assert.equal(schema["@graph"][0]["@type"], "TechArticle");
    assert.equal(schema["@graph"][1].itemListElement.length, 3);
    await assert.rejects(legacy.default({ params: Promise.resolve({ slug: guide.slug }) }),
      (error) => error.digest === `NEXT_REDIRECT;replace;/guias/${guide.slug};308;`);
  }
  assert.equal(publicGuideBySlug("toString"), undefined);
  await assert.rejects(page.default({ params: Promise.resolve({ slug: "missing" }) }), /404/);
  const catalog = load("data/campus/guides").guides;
  catalog.push({ slug: "private-test", visibility: "campus" });
  try { assert.equal(publicGuideBySlug("private-test"), undefined); }
  finally { catalog.pop(); }
});

test("sitemap indexes all public guides and excludes campus; robots allows noindex discovery", () => {
  const urls = load("app/sitemap").default().map((entry) => new URL(entry.url).pathname);
  assert.ok(urls.includes("/guias"));
  assert.equal(urls.length, 25);
  for (const guide of load("data/guides").publicGuides) assert.ok(urls.includes(`/guias/${guide.slug}`));
  assert.ok(!urls.some((url) => url.startsWith("/campus")));
  assert.equal(new Set(urls).size, urls.length);
  assert.deepEqual(load("app/campus/layout.tsx").metadata.robots, { index: false, follow: false });
  assert.equal(load("app/robots").default().rules.allow, "/");
  const campus = load("app/campus/page.tsx").default();
  assert.equal(campus.type.name, "CampusUnavailable");
});

test("guide analytics uses the existing adapter and preserves guide/program payloads", () => {
  const emitted = [];
  global.window = { dispatchEvent: (event) => emitted.push(event.detail) };
  const analytics = load("lib/analytics");
  try {
    for (const event of ["guide_view", "guide_program_cta_click"]) {
      analytics.track(event, { guide: "instalar-git", program: "frontend-react" });
    }
    assert.equal(emitted.length, 2);
    assert.deepEqual(emitted[1].properties, { guide: "instalar-git", program: "frontend-react" });
  } finally { delete global.window; }
});
test("all program landings have unique routes, complete modules and valid next steps", () => {
  assert.equal(new Set(programs.map((p) => p.slug)).size, programs.length);
  assert.equal(new Set(programs.map(programPath)).size, programs.length);
  for (const p of programs) {
    assert.ok(p.brochureUrl, p.slug + " missing brochureUrl");
    assert.ok(
      p.brochureUrl.startsWith("/brochures/"),
      p.slug + " brochureUrl should live under /brochures",
    );
    const brochurePath = resolve(
      root,
      "../public",
      p.brochureUrl.replace(/^\/+/, ""),
    );
    assert.ok(existsSync(brochurePath), p.slug + " brochure file is missing: " + p.brochureUrl);
    for (const key of [
      "audience",
      "prerequisites",
      "outcomes",
      "curriculum",
      "projects",
      "portfolioResults",
      "faq",
    ])
      assert.ok(p[key].length > 0, p.slug + " missing " + key);
    for (const m of p.curriculum) {
      assert.ok(m.topics.length > 0);
      assert.ok(m.deliverable);
      assert.ok(m.period);
    }
    for (const next of p.nextSteps) {
      assert.ok(
        programs.some((p) => p.slug === next),
        "Broken next route " + next,
      );
      assert.notEqual(next, p.slug);
    }
    assert.equal(
      new Set(p.faq.map((item) => item.question)).size,
      p.faq.length,
    );
  }
});
test("Campus and guide data are present and unique", () => {
  const campusPage = resolve(root, "app/campus/page.tsx");
  const guideFile = resolve(root, "data/campus/guides.ts");
  assert.ok(existsSync(campusPage), "Campus page is missing");
  assert.ok(existsSync(guideFile), "Campus guide data is missing");
  const campus = load("data/campus/guides");
  assert.ok(Array.isArray(campus.guides));
  assert.equal(new Set(campus.guides.map((guide) => guide.slug)).size, campus.guides.length);
  assert.ok(campus.guides.some((guide) => guide.slug === "instalar-vscode"));
});

test("React home summary and landing share the same twelve-week structure", () => {
  const react = programs.find((p) => p.slug === "frontend-react");
  assert.equal(react.duration, "12 semanas · 3 meses");
  assert.equal(react.curriculum.length, 12);
  assert.equal(react.capstone, true);
  assert.ok(react.aiSkills.length > 0);
  assert.ok(react.scrumPractices.length > 0);
  assert.deepEqual(
    weeks,
    react.curriculum.map((m) => [m.title, m.description]),
  );
  assert.ok(react.curriculum[11].topics.includes("Deploy"));
});

test("Full Stack reflects a 16-week end-to-end structure", () => {
  const fullStack = programs.find((p) => p.slug === "full-stack");
  assert.equal(fullStack.duration, "16 semanas · 4 meses");
  assert.equal(fullStack.curriculum.length, 16);
  assert.equal(fullStack.teamProject, true);
  assert.ok(fullStack.aiSkills.length > 0);
  assert.ok(fullStack.scrumPractices.length > 0);
});
test("mentoring has one canonical URL in metadata and sitemap", () => {
  const mentor = programs.find((p) => p.slug === "mentoria");
  assert.equal(programPath(mentor), "/mentorias");
  assert.equal(
    load("lib/program-metadata").programMetadata(mentor).alternates.canonical,
    "/mentorias",
  );
  const urls = load("app/sitemap")
    .default()
    .map((item) => new URL(item.url).pathname);
  assert.equal(urls.filter((p) => p === "/mentorias").length, 1);
  assert.ok(!urls.includes("/programas/mentoria"));
});
test("cohorts publish no invented commercial details", () => {
  assert.deepEqual(load("data/cohorts").cohorts, []);
  assert.deepEqual(
    load("data/cohorts").getProgramCohorts("frontend-react"),
    [],
  );
});
test("analytics remains optional and adapter failures do not interrupt the user", () => {
  const emitted = [];
  global.window = { dispatchEvent: (event) => emitted.push(event.detail) };
  const analytics = load("lib/analytics");
  try {
    analytics.setAnalyticsAdapter(() => {
      throw new Error("provider unavailable");
    });
    assert.doesNotThrow(() =>
      analytics.track("contact_submit", {
        program: "frontend-react",
        channel: "email",
        action: "handoff",
      }),
    );
    assert.equal(emitted.length, 1);
    assert.deepEqual(Object.keys(emitted[0].properties).sort(), [
      "action",
      "channel",
      "program",
    ]);
  } finally {
    delete global.window;
    analytics.setAnalyticsAdapter(undefined);
  }
});


test("commercial plans match the approved prices and teaching hours", () => {
  const { liveHours, paymentPlans } = load("data/program-commerce");
  for (const [slug, weeks, hours, prices, reservation] of [
    ["desde-cero", 8, 32, [249, 349, 380], 50],
    ["frontend-react", 12, 48, [499, 649, 690, 899], 50],
    ["full-stack", 16, 64, [799, 999, 1080, 1290], 100],
  ]) {
    const p = programs.find((p) => p.slug === slug);
    assert.equal(p.durationWeeks, weeks);
    assert.equal(liveHours(p), hours);
    assert.deepEqual(paymentPlans(p).map((plan) => plan.price), prices);
    assert.equal(p.pricing.reservation, reservation);
    assert.ok(load("lib/program-metadata").programMetadata(p).description.includes(`${hours} h en vivo`));
    if (slug !== "desde-cero") assert.equal(p.schedule.cohorts.length, 2);
  }
  for (const p of programs.filter((p) => p.kind !== "course")) {
    assert.equal(p.pricing, undefined);
    assert.equal(p.schedule, undefined);
  }
});
