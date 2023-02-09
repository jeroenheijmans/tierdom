<script lang="ts">
  import { toggleSquareMode } from '$lib/stores';
  import type { Item } from './Item';
  export let item: Item;

  export const gradient = 'linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7))';
</script>

<div class="flex w-full border-2 border-black bg-transparent overflow-hidden">
  <button class="aspect-square h-32 border-r-2 -mb-2 border-b-2 border-black cursor-pointer" on:click={toggleSquareMode}>
    <span class="sr-only">Toggle square mode</span>
    {#if item.hasArt}
      <img class="w-full" src={item.artUrlSquare} alt={`Box art for ${item.title}`} />
    {:else}
      <div class="w-full h-full bg-white/5 text-black flex justify-center items-center font-bold">x</div>
    {/if}
  </button>
  <div class="w-full group relative">
    <div class="h-[2px] w-full absolute bg-slate-400 opacity-70 transition-all group-hover:h-[8px] group-hover:opacity-80">
      <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`} />
    </div>
    <h3 class="text-xl font-bold text-slate-100 text-shadow px-2 mt-2">
      {item.title}
    </h3>
    <h2 class="font-bold text-slate-100 text-shadow px-2">
      {item.rating}/100, <span class="uppercase">{item.mainProp}</span>
    </h2>
    <p class="p-2">
      {item.description}
    </p>
  </div>
</div>
