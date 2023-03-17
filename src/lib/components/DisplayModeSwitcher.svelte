<script lang="ts">
  import { page } from '$app/stores';

  $: path = $page.url.pathname;
  $: layoutMode = path.endsWith('/overview') ? 'overview' : 'detailed';
  $: overviewUrl = path.replace('/detailed', '/overview');
  $: detailedUrl = path.replace('/overview', '/detailed');
</script>

<a
  aria-label="Toggle square tier list items"
  class={`p-1 md:px-2 flex items-start gap-2 hover:opacity-90 shrink-0
  ${layoutMode === 'overview' ? 'opacity-75' : 'opacity-25'}`}
  title="toggle compact mode with little squares"
  href={overviewUrl}
>
  <img src="/img/layout-mode-grid.svg" class="h-6" alt="3 by 3 little squares" />
  <span class="hidden lg:inline-block">Grid with icons</span>
</a>
<a
  aria-label="Toggle rectangular tier list items"
  class={`p-1 md:px-2 flex items-start gap-2 hover:opacity-90 shrink-0 mr-2 sm:mr-0
  ${layoutMode === 'detailed' ? 'opacity-75' : 'opacity-25'}`}
  title="toggle extended mode with full reviews"
  href={detailedUrl}
>
  <img src="/img/layout-mode-list.svg" class="h-6" alt="3 horizontal bars" />
  <span class="hidden lg:inline-block">Full descriptions</span>
</a>
