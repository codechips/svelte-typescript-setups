const swc = require('@swc/core');
const fs = require('fs');

module.exports = function (snowpackConfig) {
  // read options from the main Snowpack config file
  const useSourceMaps = snowpackConfig.buildOptions.sourceMaps;

  return {
    name: 'snowpack-swc',
    resolve: {
      input: ['.ts'],
      output: ['.js'],
    },
    async load({ filePath }) {
      // read the TypeScript file
      const contents = await fs.promises.readFile(filePath, 'utf-8');

      // transform it with SWC compiler
      const output = await swc.transform(contents, {
        filename: filePath,
        sourceMaps: useSourceMaps,
        isModule: true,
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'esnext',
        },
      });

      return {
        '.js': {
          code: output.code,
          map: output.map,
        },
      };
    },
  };
};
