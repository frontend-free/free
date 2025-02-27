import { createFilter } from '@rollup/pluginutils';

function vitePluginRemoveSvgColor(config?: { include?: string[]; exclude?: string[] }) {
  const { include = ['**/svgs/**/*.svg?react'], exclude } = config || {};

  const filter = createFilter(include, exclude);

  return {
    name: 'vite-plugin-remove-svg-color',
    transform(src, id) {
      if (filter(id) && id.endsWith('.svg?react')) {
        const code = src.replace(/fill: "#[0-9a-fA-F]{6}"/g, 'fill: "currentColor"');

        return {
          code,
        };
      }
    },
  };
}

export default vitePluginRemoveSvgColor;
