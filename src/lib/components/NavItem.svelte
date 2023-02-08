<script lang="ts">
  export let href: string;
  import { page } from '$app/stores';

  $: bg = $page.url.pathname == href ? 'bg-slate-100/40' : 'bg-slate-100/10';
</script>

<a
  {href}
  class={`
  hover:bg-slate-100/40 px-4 py-2
  ${bg}
`}
>
  <slot />
</a>
