<script lang="ts">
  import type { Item } from '$lib/models/Item';

  export let item: Item;
  export let clazz: string = '';

  export const gradient = 'linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7))';
</script>

<div id={'id--' + item.code} class="w-full scroll-mt-24">
  <div class={`flex w-full border-2 border-black bg-transparent overflow-hidden group relative ${clazz}`}>
    <div class="aspect-square h-24 md:h-32 border-r-2 -mb-2 border-b-2 border-black">
      {#if item.hasArt}
        <a href={'#id--' + item.code}>
          <img class="w-full" src={item.artUrlSquare} alt={`Box art for ${item.title}`} />
        </a>
      {:else}
        <div class="w-full h-full bg-white/5 text-black flex justify-center items-center font-bold">x</div>
      {/if}
    </div>
    <div class="w-full">
      {#if !!item.iconUrl}
        <div class="float-right p-1 md:p-2 shrink-0 opacity-75">
          <img
            src={item.iconUrl}
            alt="controller for game system"
            class="invert max-w-[140px] md:max-w-[140px] max-h-[76px] md:max-h-[92px]"
          />
        </div>
      {/if}
      <h3 class="text-xl font-bold text-slate-100 text-shadow px-2">
        {item.title}
      </h3>
      <h2 class="font-bold text-slate-100 text-shadow px-2">
        {item.rating}/100, <span class="uppercase">{item.mainProp}</span><slot />
      </h2>
      <p class="p-2 pb-4">{item.description}</p>
    </div>
    <div class="h-[2px] w-full absolute bottom-0 bg-slate-400 opacity-70 transition-all group-hover:h-[8px] group-hover:opacity-80">
      <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`} />
    </div>
  </div>
</div>
