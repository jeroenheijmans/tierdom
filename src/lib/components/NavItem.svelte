<script lang="ts">
  export let href: string;
  import { page } from '$app/stores';

  $: bg = $page.url.pathname == href ? 'bg-slate-100/30' : 'bg-slate-100/10';
</script>

<a {href} class={`hover:bg-slate-100/40 px-2 py-1 md:px-4 md:py-2 ${bg}`}>
  <slot />
</a>
