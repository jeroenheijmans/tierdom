<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Item } from './Item';

  const dispatch = createEventDispatcher();
  export let item: Item;
</script>

<div class="fixed top-0 left-0 h-screen w-screen z-50 flex">
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-black/50 backdrop-blur-sm"
    on:keydown={() => dispatch('dismiss')}
    on:click={() => dispatch('dismiss')}
  />
  <div class="m-auto w-[800px]">
    <div class="p-2 md:px-8 md:py-4 m-2 border border-slate-900 rounded bg-slate-700 drop-shadow-[2px_4px_8px_rgba(0,0,0,0.5)]">
      <button
        on:click={() => dispatch('dismiss')}
        aria-label="Close"
        class="absolute top-0 right-0 py-2 px-4 m-2 rounded bg-black/10 hover:bg-black/20">x</button
      >
      <h3 class="text-3xl font-bold">{item.title}</h3>
      <p class="mt-2 font-bold">
        <span class="uppercase">{item.mainProp}</span>
        |
        <span>{item.rating}/100</span>
        |
        <span class={`text-${item.tierLevel}-tier`}>{item.tierLevel}-tier</span>
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
        <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`} />
      </div>
    </div>
  </div>
</div>
