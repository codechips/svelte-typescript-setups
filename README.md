# svelte-typescript-setups

> Examples of different bundler setups for Svelte **only**, not Sapper.

## Motivation

I am on the quest to find the best bundler for Svelte. Why? Because development time is expensive. When writing code I want a tight feedback loop, easy setup and configuration, flexibility and small and efficient bundle size.

## My Requirements

- It must be fast
- It must support Typescript
- It must support PostCSS
- It must produce small and efficient bundles
- It must produce correct sourcemaps for debugging
- It should support HMR (Hot Module Replacement)

## Test App

For the purpose of testing I created a simple Svelte app. Its functionality is simple. You press a button and it fetches a random Kanye West tweet from [Kanye as a Service](https://kanye.rest/).

![Kanye Says app screenshot](https://res.cloudinary.com/codechips/image/upload/v1598252607/kanye-says-app_rup4n6.png)

The app might be simple, maybe even naïve, but it has a few interesting parts.

- **Svelte components in Typescript**. I want to see if transpiling and type checking works correctly for TS.
- **External Svelte library**. Not all bundlers support libraries written in Svelte efficiently.
- **External library dependency**. I want to see if Vite supports tree shaking when bundling for production.
- **Extenal Assets**. It should be possible to import SVG, PNG, JSON and other external assets in our code.
- **PostCSS with TailwindCSS**. A good bundler should make it easy to work with SASS and PostCSS.
- **Business components in Typescript**. Typescript is here to stay. A good bundler should support it out-of-the-box.

## Bundlers

- Vite (DONE) - [Is Vite currently the best bundler for Svelte?](https://codechips.me/svelte-with-vitejs-typescript-tailwind/)
- Svite (DONE) -[Svelte, PostCSS and Typescript with Svite bundler](https://codechips.me/svelte-postcss-and-typescript-with-svite/)
- Snowpack (DONE) - [Snowpack for Svelte development revisited](https://codechips.me/snowpack-for-svelte-revisited/)
- Webpack (DONE) - [Why Webpack 5 is the best bundler for Svelte](https://codechops.me/svelte-and-webpack-5/)

## There is more!

For more interesting stuff like this follow me on [Twitter](https://twitter.com/codechips) or check out my blog at [codechips.me](https://codechips.me).

