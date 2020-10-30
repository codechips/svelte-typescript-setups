module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
  },
  purge: {
    content: ['./src/**/*.svelte', './public/*.html'],
    whitelistPatterns: [/svelte-/],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
