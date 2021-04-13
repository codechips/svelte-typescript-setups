<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import InlineSVG from 'svelte-inline-svg';
  import usa from './assets/usa.svg';

  type Quote = {
    quote: string;
  };

  const KANYE_API = process.env.KANYE_API as string;

  let wisdom: Promise<Quote> | undefined = undefined;

  const fetchQuote = () =>
    (wisdom = fetch(KANYE_API).then((res) => res.json()));

  onMount(fetchQuote);
</script>

<style lang="postcss">
  .preach {
    @apply text-3xl font-bold px-10 py-3 rounded-lg bg-indigo-800
      text-indigo-100 outline-none shadow-lg;
  }
  .preach:hover {
    @apply bg-indigo-600;
  }
  @screen md {
    .preach {
      @apply text-5xl;
    }
  }
</style>

<h1
  class="text-5xl font-black text-indigo-900 lg:items-center lg:flex lg:text-8xl">
  <InlineSVG src={usa} alt="usa" class="inline-block w-32 h-20" />
  <!-- prettier-ignore -->
  <div class="leading-none mt-5 lg:mt-0 lg:ml-4">
    Sh<span class="text-red-700">*</span>t Kanye says
  </div>
</h1>

<div
  class="mt-5 text-5xl font-extrabold leading-none text-indigo-800 lg:text-8xl">
  {#await wisdom then res}
    {#if res}
      <p in:fade={{ duration: 500 }}>{res.quote}</p>
    {/if}
  {:catch err}
    <p class="text-red-700">{err.message}. Word.</p>
  {/await}
</div>

<div class="mt-10">
  <button class="preach" on:click={fetchQuote}>Preach to me!</button>
</div>
