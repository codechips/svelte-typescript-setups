module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-postcss',
    // './plugins/plugin-swc.js',
    [
      '@snowpack/plugin-run-script',
      { cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream' },
    ],
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    // don't open browser
    open: 'none',
    // don't clear the output
    output: 'stream',
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};
