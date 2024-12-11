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
      { type: "lib", dir: "packages/x6/src" },
      { type: "common", dir: "common/free-scripts/src" },
      { type: "common", dir: "common/commit-lint/doc" },
      { type: "common", dir: "common/eslint-config-base/doc" },
      { type: "common", dir: "common/style-lint/doc" },
    ],
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},
});
