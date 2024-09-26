import { defineConfig } from "dumi";

export default defineConfig({
  base: "/free",
  publicPath: "/free/",
  outputPath: "docs-dist",
  themeConfig: {
    name: "@fe-free",
    logo: false,
    showLineNum: true,
    footer: false,
    socialLinks: {
      github: "https://github.com/frontend-free/free"
    }
  },
  mfsu: false,
  resolve: {
    atomDirs: [
      { type: "lab", dir: "lab" },
      { type: "lib", dir: "packages/core/src" },
      { type: "lib", dir: "packages/tool/src" },
      { type: "engineered", dir: "packages/free-scripts/src" },
      { type: "engineered", dir: "packages/commit-lint/doc" },
      { type: "engineered", dir: "packages/eslint-config-base/doc" },
      { type: "engineered", dir: "packages/style-lint/doc" },
    ],
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
