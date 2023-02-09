<script lang="ts">
  import type { Item } from './Item';
  export let item: Item;

  export const gradient = 'linear-gradient(rgba(20, 20, 30, 0.7), rgba(20, 20, 30, 0.7))';
  $: squareBackgroundStyle = item.hasArt ? `background-image: ${gradient}, url('${item.artUrlSquare}');` : `background-image: ${gradient};`;
</script>

<div
  class="
    group flex flex-col
    border-2 border-black bg-slate-600/50
    w-[50%] md:w-[33.3333333%] lg:w-[25%] xl:w-[16.6666667%] 2xl:w-[12.5%]
    aspect-square
    bg-center bg-cover cursor-pointer relative
  "
  style={squareBackgroundStyle}
>
  <button class="absolute top-0 bottom-0 right-0 left-0">
    <span class="sr-only">Toggle rectangle mode</span>
  </button>
  <h3
    class="
      p-1 pt-0 pr-8
      transition-all group-hover:pr-0 group-hover:text-2xl
      md:text-xl font-bold text-slate-100 text-shadow
    "
  >
    {item.title}
  </h3>
  <div
    class="
      flex items-end mt-auto
      transition-all group-hover:opacity-100 group-hover:text-xl
      font-bold text-slate-200 opacity-60 uppercase
    "
  >
    <div class="mx-1">{item.rating}/100</div>
    <span class="ml-auto mr-2">{item.mainProp}</span>
  </div>
  <div
    class="
      relative m-1 h-[4px] bg-slate-400 opacity-70
      transition-all group-hover:h-[16px] group-hover:opacity-80
    "
  >
    <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`} />
  </div>
</div>
