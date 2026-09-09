import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import ts from "typescript";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../src");
const nativeRequire = createRequire(import.meta.url);
const cache = new Map();
// Load the actual TypeScript data without a test framework or generated fixtures.
function load(file) {
  const path = resolve(root, file.endsWith(".ts") ? file : file + ".ts");
  if (cache.has(path)) return cache.get(path).exports;
  const module = { exports: {} };
  cache.set(path, module);
  const source = ts.transpileModule(readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
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
test("all program landings have unique routes, complete modules and valid next steps", () => {
  assert.equal(new Set(programs.map((p) => p.slug)).size, programs.length);
  assert.equal(new Set(programs.map(programPath)).size, programs.length);
  for (const p of programs) {
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
test("React home summary and landing share the same eight modules", () => {
  const react = programs.find((p) => p.slug === "frontend-react");
  assert.equal(react.duration, "8 semanas");
  assert.equal(react.curriculum.length, 8);
  assert.deepEqual(
    weeks,
    react.curriculum.map((m) => [m.title, m.description]),
  );
  assert.ok(react.curriculum[7].topics.includes("Testing básico"));
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
