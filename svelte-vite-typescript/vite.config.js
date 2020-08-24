import svelte from "vite-plugin-svelte";
import autopreprocess from "svelte-preprocess";

const preprocess = autopreprocess({
  postcss: {
    plugins: [require("tailwindcss")]
  }
});

export default {
  plugins: [svelte({ preprocess })],
  rollupDedupe: ["svelte"]
};
