<script>
  import '../app.css';
  import NavItem from '../lib/components/NavItem.svelte';
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
    </nav>
    <slot />
  </div>
</div>
