<script>
  import A from '$lib/components/A.svelte';
  import AboutTierLists from '$lib/components/AboutTierLists.svelte';
</script>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h1 class="text-2xl font-bold mt-8">What is all this?</h1>
  <p class="mt-2">
    Welcome to <strong>Tierdom</strong>: a List of Lists for things I like.
    Visualized in "Tier Maker" style.
  </p>
  <p class="mt-4">
    I love <em>having</em> lists, and I even more so love <em>making and sharing</em> lists.
    The web applications meant specifically for this (IMDB, GoodReads, etc.) are nice,
    but they have several big downsides.
  </p>
  <p class="mt-4">
    Hosting my own lists might also have downsides, but there are big upsides.
    They compare like this:
  </p>

  <table class="border-separate border-spacing-1 mt-4">
    <thead>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-700/50"></th>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-700/50">Proprietary Apps</th>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-700/50">Self-hosted</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Can show lists</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">✅</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">✅</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Feature rich</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">✅</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">❌</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Minimalistic UI</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">❌</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">✅</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Uniform UI across lists</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">❌</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">✅</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Own your words (e.g. reviews)</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">❌</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">✅</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Own your data (the lists)</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800">❌</td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50">✅</td>
      </tr>
      <tr>
        <th class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-left bg-slate-700/50">Solution rating :-)</th>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-slate-800 font-bold"><span class="whitespace-nowrap text-xs sm:text-base">😐 55 / 100 😐</span></td>
        <td class="px-2 py-1 md:px-4 md:py-2 w-1/3 text-xs sm:text-base text-center bg-teal-900/50 font-bold"><span class="whitespace-nowrap text-xs sm:text-base">🤩 90 / 100 🤩</span></td>
      </tr>
    </tbody>
  </table>

  <AboutTierLists clazz="mt-8" />

  <h2 class="text-lg font-bold mt-8">What's with the name "Tierdom"?</h2>
  <p class="mt-2">
    Well... it's my own little
    <A href="https://www.merriam-webster.com/dictionary/fiefdom">Fiefdom</A>
    of
    <A href="https://en.wikipedia.org/wiki/Tier_list">Tier</A>
    lists.
    Plus, it wasn't "taken" yet (for anything remotely related) so with this initial work I guess I'm "claiming" the term?
  </p>

  <h2 class="text-lg font-bold mt-8">Who are you?</h2>
  <p class="mt-2">
    My name is Jeroen Heijmans. Find all my contact information and other side projects at
    <A href="https://jeroenheijmans.nl">https://jeroenheijmans.nl</A>
    or read my (infrequent) personal blog at
    <A href="https://blog.jeroenheijmans.nl">https://blog.jeroenheijmans.nl</A>
  </p>

  <h2 class="text-lg font-bold mt-8">Is this Open Source?</h2>
  <p class="mt-2">
    Yes and no. Yes, it <em>is</em> "open" at
    <A href="https://github.com/jeroenheijmans/tierdom">github.com/jeroenheijmans/tierdom</A>.
    But no, it's currently not licensed in any way that allows reuse.
    I just haven't settled yet on which license to use.
    Or thought about how to separate content from code, placing them under different licenses.
  </p>
  <p class="mt-2">
    If you really want to spin off this work, please let me know and I'll give thinking about these matters some priority.
  </p>
</div>
