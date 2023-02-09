<script lang="ts">
  export let clazz = '';
</script>

<div class={`border border-slate-700 bg-slate-900 p-4 ${clazz}`}>
  <slot />
</div>
