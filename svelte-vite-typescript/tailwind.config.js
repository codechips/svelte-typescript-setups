module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
    applyComplexClasses: true
  },
  purge: {
    content: ["./src/**/*.svelte"],
    whitelistPatterns: [/svelte-/]
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
};
