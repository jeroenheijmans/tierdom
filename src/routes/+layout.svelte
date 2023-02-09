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
      <NavItem href="/games">Games</NavItem>
      <NavItem href="/books">Books</NavItem>
      <NavItem href="/movies">Movies</NavItem>
      <span class="hidden md:inline-block py-2">-</span>
      <NavItem href="/about">About</NavItem>
      <div class="ml-auto">
        <button
          aria-label="Toggle square tier list items"
          class={`p-2 ${$layoutMode === LayoutMode.square ? 'opacity-75' : 'opacity-25'} hover:opacity-75`}
          title="toggle compact mode with little squares"
          on:click={toggleSquareMode}
        >
          <svg width="28" height="28" viewBox="0 0 11 11" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect width="3" height="3" rx="1" />
            <rect x="4" width="3" height="3" rx="1" />
            <rect x="8" width="3" height="3" rx="1" />
            <rect y="4" width="3" height="3" rx="1" />
            <rect x="4" y="4" width="3" height="3" rx="1" />
            <rect x="8" y="4" width="3" height="3" rx="1" />
            <rect y="8" width="3" height="3" rx="1" />
            <rect x="4" y="8" width="3" height="3" rx="1" />
            <rect x="8" y="8" width="3" height="3" rx="1" />
          </svg>
        </button>
        <button
          aria-label="Toggle rectangular tier list items"
          class={`p-2 ${$layoutMode === LayoutMode.rectangle ? 'opacity-75' : 'opacity-25'} hover:opacity-75`}
          title="toggle extended mode with full reviews"
          on:click={toggleRectangleMode}
        >
          <svg width="28" height="28" viewBox="0 0 11 11" fill="white" xmlns="http://www.w3.org/2000/svg">
            <rect width="11" height="3" rx="1" />
            <rect y="4" width="11" height="3" rx="1" />
            <rect y="8" width="11" height="3" rx="1" />
          </svg>
        </button>
      </div>
    </nav>
    <slot />
  </div>
</div>
