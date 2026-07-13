import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background) / <alpha-value>)",
                foreground: "rgb(var(--foreground) / <alpha-value>)",
                accent: {
                    DEFAULT: "rgb(var(--accent) / <alpha-value>)",
                    strong: "rgb(var(--accent-strong) / <alpha-value>)",
                    fg: "rgb(var(--accent-fg) / <alpha-value>)",
                },
                surface: {
                    DEFAULT: "rgb(var(--surface) / <alpha-value>)",
                    2: "rgb(var(--surface-2) / <alpha-value>)",
                },
                hairline: "rgb(var(--hairline) / <alpha-value>)",
                muted: "rgb(var(--muted) / <alpha-value>)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                card: "var(--radius-card)",
            },
            boxShadow: {
                glow: "0 20px 60px -20px rgb(var(--accent) / 0.45)",
            },
            keyframes: {
                "fade-in-up": {
                    "0%": { opacity: "0", transform: "translateY(12px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-14px)" },
                },
            },
            animation: {
                "fade-in-up": "fade-in-up 0.6s ease-out both",
                float: "float 8s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
export default config;
