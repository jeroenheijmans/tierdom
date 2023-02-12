<script lang="ts">
  export let href: string;
  import { page } from '$app/stores';

  $: bg =
    $page.url.pathname == href
      ? 'bg-gradient-to-b from-slate-300/30 via-slate-100/20 to-slate-300/30'
      : 'bg-gradient-to-b from-slate-300/10 via-slate-100/10 to-slate-300/10';
</script>

<a {href} class={`hover:bg-slate-500/20 hover:shadow-lg px-2 py-1 md:px-4 md:py-1 shadow border border-slate-900/10 rounded-sm ${bg}`}>
  <slot />
</a>
