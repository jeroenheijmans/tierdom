<script>
  import A from '$lib/components/A.svelte';
  import NavItem from '$lib/components/NavItem.svelte';
  import { LayoutMode, layoutMode, toggleRectangleMode, toggleSquareMode } from '$lib/stores';
  import '../app.css';
  import { page } from '$app/stores';

  $: togglesClass = $page.url.pathname.startsWith('/tier-lists/') ? '' : 'hidden';
</script>

<div class="min-h-screen flex flex-col bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100">
  <div class="mb-8">
    <div class="pb-4">
      <div class="sticky top-0 py-1 md:py-2 border-b border-b-slate-900/20 bg-slate-700 z-10 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)]">
        <nav class="flex gap-1 md:gap-4 max-w-page mx-auto px-2 md:px-4 ">
          <div class="flex flex-wrap items-center gap-1 md:gap-4">
            <NavItem href="/">Home</NavItem>
            <span class="hidden md:inline-block w-2" />
            <NavItem href="/tier-lists/games">Games</NavItem>
            <NavItem href="/tier-lists/books">Books</NavItem>
            <NavItem href="/tier-lists/movies">Movies</NavItem>
            <span class="hidden md:inline-block w-2" />
            <NavItem href="/about">About</NavItem>
          </div>
          <div class={`ml-auto flex flex-nowrap ${togglesClass}`}>
            <button
              aria-label="Toggle square tier list items"
              class={`p-1 md:px-2 flex items-start gap-2 hover:opacity-90 shrink-0
                ${$layoutMode === LayoutMode.square ? 'opacity-75' : 'opacity-25'}`}
              title="toggle compact mode with little squares"
              on:click={toggleSquareMode}
            >
              <img src="/img/layout-mode-grid.svg" class="h-6" alt="3 by 3 little squares" />
              <span class="hidden lg:inline-block">Grid with icons</span>
            </button>
            <button
              aria-label="Toggle rectangular tier list items"
              class={`p-1 md:px-2 flex items-start gap-2 hover:opacity-90 shrink-0 mr-2 sm:mr-0
                ${$layoutMode === LayoutMode.rectangle ? 'opacity-75' : 'opacity-25'}`}
              title="toggle extended mode with full reviews"
              on:click={toggleRectangleMode}
            >
              <img src="/img/layout-mode-list.svg" class="h-6" alt="3 horizontal bars" />
              <span class="hidden lg:inline-block">Full descriptions</span>
            </button>
          </div>
        </nav>
      </div>
      <div class="max-w-page mx-auto px-2 md:px-4 ">
        <slot />
      </div>
    </div>
  </div>
  <footer class="mt-auto border-t border-t-slate-700 bg-black/10 py-2">
    <div class="px-2 md:px-4 opacity-50 text-sm">
      <div class="max-w-page mx-auto flex gap-4">
        <span>© 2023, Jeroen Heijmans</span>
        <span class="hidden md:inline-block">|</span>
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <A href="https://jeroenheijmans.nl">WWW</A>
        <span class="hidden md:inline-block">|</span>
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <A href="https://blog.jeroenheijmans.nl">Blog</A>
        <span class="hidden md:inline-block">|</span>
        <A href="https://github.com/jeroenheijmans/tierdom">Tierdom Source</A>
      </div>
    </div>
  </footer>
</div>
