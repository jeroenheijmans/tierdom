<script lang="ts">
  export let clazz = '';
</script>

<!-- prettier-ignore -->
<div class={clazz}>
  <h2 class="text-lg font-bold">What is a "Tier List"?</h2>
  <p>
    It's a way to rank items in a list.
    Items in the same "Tier" ("rank") are normally considered equal.
    However, at tierdom, within tiers items are also ranked.
    The tiers are based of the US grading system with letters (with an "S" added), roughly like this:
  </p>
  <ul class="mt-4">
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-S-tier">S</span>
      </strong>
      <span><strong>Tier:</strong> 🤩 Perfection!! Best of the best!</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-A-tier">A</span>
      </strong>
      <span><strong>Tier:</strong> 😁 Fantastic! Top grade.</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-B-tier">B</span>
      </strong>
      <span><strong>Tier:</strong> 😊 Great. Above average stuff.</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-C-tier">C</span>
      </strong>
      <span><strong>Tier:</strong> 🙂 Decent. A passing grade.</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-D-tier">D</span>
      </strong>
      <span><strong>Tier:</strong> 😑 Mèh. Sub-par stuff.</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-E-tier">E</span>
      </strong>
      <span><strong>Tier:</strong> 😠 Rubbish! Usually not worth it.</span>
    </li>
    <li class="ml-4 mb-2 flex gap-2">
      <strong class="shrink-0">
        <span class="w-8 text-black/90 text-center inline-block bg-F-tier">F</span>
      </strong>
      <span><strong>Tier:</strong> 🤮 Abysmal!! Lowest of the lowest!</span>
    </li>
  </ul>
</div>
