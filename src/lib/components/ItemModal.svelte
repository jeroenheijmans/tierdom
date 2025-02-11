<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import type { Item } from '$lib/models/Item';

  const dispatch = createEventDispatcher();
  export let item: Item;

  // TODO: Deduplicate from AboutTierLists.svelte
  const tierEmojiMap: Record<string, string> = {
    S: '🤩',
    A: '😁',
    B: '😊',
    C: '🙂',
    D: '😑',
    E: '😠',
    F: '🤮',
  };

  //////////////////////////////////////////////////////////////
  // Big old mess of a workaround to ensure the body will remain
  // at the right position before/after showing the modal, while
  // keeping the scrollbar on the side, while also not allowing
  // the body to scroll when the overlay is visible.
  //
  // See also: https://stackoverflow.com/q/8701754/419956
  // See also: https://stackoverflow.com/a/63260588/419956
  let top: number = 0;
  onMount(() => {
    top = document.documentElement.scrollTop;
    document.body.style.top = -top + 'px';
    document.body.style.inlineSize = '100%';
    document.body.classList.add('fixed');
  });
  onDestroy(() => {
    document.body.style.top = 'auto';
    document.body.style.inlineSize = 'auto';
    document.body.classList.remove('fixed');
    document.documentElement.scrollTop = top;
  });
  //////////////////////////////////////////////////////////////
</script>

<div class="fixed top-0 left-0 bottom-0 right-0 z-50 flex backdrop-blur-sm" transition:fade={{ duration: 150 }}>
  <div
    class="fixed top-0 left-0 bottom-0 right-0 bg-black/50"
    on:keydown={() => dispatch('dismiss')}
    on:click={() => dispatch('dismiss')}
    role="button"
    tabindex="0"
  ></div>
  <div class="m-4 py-4 md:m-auto w-[800px] max-h-full">
    <div
      class="p-2 md:px-8 md:py-4 m-2 max-h-full overflow-y-auto border border-slate-900 rounded bg-slate-700 drop-shadow-[2px_4px_8px_rgba(0,0,0,0.5)]"
    >
      <button
        on:click={() => dispatch('dismiss')}
        aria-label="Close"
        class="float-right py-2 px-4 ml-2 mb-2 rounded bg-black/10 hover:bg-black/20">x</button
      >
      <h3 class="text-3xl font-bold pr-12">{item.title}</h3>
      <p class="mt-2 font-bold flex flex-wrap gap-1">
        <span class={`bg-slate-600 px-2 py-1 text-${item.tierLevel}-tier`}>{tierEmojiMap[item.tierLevel]} {item.tierLevel}-tier</span>
        <span class="bg-slate-600 px-2 py-1">{item.rating}/100</span>
        <span class="bg-slate-600 px-2 py-1 uppercase">{item.mainProp}</span>
        {#if $$slots.default}
          <span class="bg-slate-600 px-2 py-1"><slot /></span>
        {/if}
      </p>
      <div class="my-4">
        {item.description}
      </div>
      <div class="flex flex-wrap gap-2">
        {#if item.hasArt}
          <img class="h-24" src={item.artUrlSquare} alt={`Box art for ${item.title}`} />
        {/if}
        {#if !!item.iconUrl}
          <img src={item.iconUrl} alt="controller for game system" class="invert h-24" />
        {/if}
      </div>
      <div class="h-[4px] mt-4 bg-slate-400 opacity-70">
        <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`}></div>
      </div>
    </div>
  </div>
</div>
