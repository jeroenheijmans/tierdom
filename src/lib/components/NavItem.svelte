<script lang="ts">
  export let href: string;
</script>

<a {href} class="bg-slate-100/20 hover:bg-slate-100/30 px-4 py-2">
  <slot />
</a>
