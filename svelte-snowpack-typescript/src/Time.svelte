<script lang="ts">
  import { init, Intervals } from './timer';
  /* import format from 'date-fns/format' */
  import { format } from 'date-fns';

  const timer = init(Intervals.OneSec);

  let timeSpent = '00:00';

  $: timeSpent = format(new Date($timer * 1000), 'mm:ss');
</script>

<p class="px-2 py-1 text-center text-indigo-900 bg-indigo-400">
  So far you've only waisted
  <strong>{timeSpent}</strong>
  of your life on Kanye
</p>
