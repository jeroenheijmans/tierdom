<script>
  import AboutTierLists from '$lib/components/AboutTierLists.svelte';
</script>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h1 class="text-2xl font-bold mt-8">Tierdom at JeroenHeijmans.nl</h1>
  <p class="mt-2">
    I have a love-hate relationship with list- and review authoring web applications.
    The likes GoodReads, IMDB, TripAdvisor, BoardGameGeek, and others...
    They are great, but <strong>they scatter <em>my</em> data all over the web.</strong>
  </p>
  <p class="mt-4">
    What you see in front of you are my (tier) lists.
    Things I liked... or not so much.
    Sometimes even with a little review or explanation.
  </p>
  <p class="mt-4">
    Enjoy!
  </p>
  <h2 class="text-xl font-bold mt-4">The Lists</h2>
  <p class="mt-2">Current and upcoming tier lists:</p>
  <div class="flex flex-wrap gap-4 mt-4">
    <a href="/tier-lists/games" class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
      style="background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('art/games/it-takes-two.png')"
    >
      <span>Games</span>
    </a>
    <a href="/tier-lists/books" class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
      style="background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('art/books/mythical-man-month.png')"
    >
      <span>Books</span>
    </a>
    <a href="/tier-lists/movies" class="border-2 border-slate-700 hover:border-slate-400 text-shadow font-bold bg-center bg-cover text-xl hover:text-2xl transition-all aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30"
      style="background-image: linear-gradient(rgba(20, 20, 30, 0.5), rgba(20, 20, 30, 0.5)), url('art/movies/donnie-darko.png')"
    >
      <span>Movies</span>
    </a>
    <span class="border-2 border-transparent text-shadow font-bold bg-center bg-cover text-xl aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30 opacity-50">
      <span class="text-center">Board Games<br>(upcoming)</span>
    </span>
    <span class="border-2 border-transparent text-shadow font-bold bg-center bg-cover text-xl aspect-square min-w-[10rem] flex items-center justify-center bg-slate-100/20 hover:bg-slate-100/30 opacity-50">
      <span class="text-center">Recipes<br>(upcoming)</span>
    </span>
  </div>

  <AboutTierLists clazz="mt-4" />
  
  <h2 class="text-xl font-bold mt-4">Other websites</h2>
  <p class="mt-2">Some other things from me:</p>
  <ul class="mt-2">
    <li class="list-disc ml-8">
      🏠
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a 
        class="a-external"
        target="_blank"
        href="https://jeroenheijmans.nl">
        https://jeroenheijmans.nl
    </a></li>
    <li class="list-disc ml-8">
      ✒
      <!-- svelte-ignore security-anchor-rel-noreferrer -->
      <a 
        class="a-external"
        target="_blank"
        href="https://blog.jeroenheijmans.nl">
        https://blog.jeroenheijmans.nl
      </a></li>
  </ul>
</div>
