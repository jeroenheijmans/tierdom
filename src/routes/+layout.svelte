<script>
  import '../app.css';
  import NavItem from '../lib/components/NavItem.svelte';
  import { LayoutMode, layoutMode, toggleRectangleMode, toggleSquareMode } from '../lib/stores';
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100 px-2 md:px-4">
  <div class="max-w-page mx-auto pb-4">
    <nav class="flex flex-wrap gap-1 md:gap-4 pt-4">
      <NavItem href="/">Home</NavItem>
      <span class="hidden md:inline-block py-2">-</span>
      <NavItem href="/tier-lists/games">Games</NavItem>
      <NavItem href="/tier-lists/books">Books</NavItem>
      <NavItem href="/tier-lists/movies">Movies</NavItem>
      <span class="hidden md:inline-block py-2">-</span>
      <NavItem href="/about">About</NavItem>
      <div class="ml-auto flex flex-nowrap">
        <button
          aria-label="Toggle square tier list items"
          class={`p-1 md:p-2 flex gap-2 hover:opacity-90
            ${$layoutMode === LayoutMode.square ? 'opacity-75' : 'opacity-25'}`}
          title="toggle compact mode with little squares"
          on:click={toggleSquareMode}
        >
          <img src="/img/layout-mode-grid.svg" alt="3 by 3 little squares" />
          <span class="hidden lg:inline-block">Grid with icons</span>
        </button>
        <button
          aria-label="Toggle rectangular tier list items"
          class={`p-1 md:p-2 flex gap-2 hover:opacity-90
            ${$layoutMode === LayoutMode.rectangle ? 'opacity-75' : 'opacity-25'}`}
          title="toggle extended mode with full reviews"
          on:click={toggleRectangleMode}
        >
          <img src="/img/layout-mode-list.svg" alt="3 horizontal bars" />
          <span class="hidden lg:inline-block">Full descriptions</span>
        </button>
      </div>
    </nav>
    <slot />
  </div>
</div>
