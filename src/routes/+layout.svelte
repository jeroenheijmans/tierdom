<script>
  import '../app.css';
  import NavItem from '../lib/components/NavItem.svelte';
</script>

<div class="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-slate-100">
  <div class="max-w-page mx-auto pb-4">
    <nav class="flex gap-4 pt-4">
      <NavItem href="/">Home</NavItem>
      <span class="py-2 inline-block">-</span>
      <NavItem href="/games">Games</NavItem>
      <NavItem href="/books">Books</NavItem>
      <NavItem href="/movies">Movies</NavItem>
      <span class="py-2 inline-block">-</span>
      <NavItem href="/about">About</NavItem>
    </nav>
    <slot />
  </div>
</div>
