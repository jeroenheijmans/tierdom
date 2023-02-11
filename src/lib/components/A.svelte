<script lang="ts">
  export let href: string;
</script>

<!-- prettier-ignore -->
<a
  class="hover:text-slate-500"
  target="_blank"
  rel="noreferrer"
  {href}><span class="underline"
><slot /></span><sup class="text-xs no-underline">↗</sup></a>
