<script lang="ts">
  import type { Item } from './Item';
  export let item: Item;
  export let clazz: string = '';

  export const gradient = 'linear-gradient(rgba(20, 20, 30, 0.6), rgba(20, 20, 30, 0.6))';
  $: squareBackgroundStyle = item.hasArt ? `background-image: ${gradient}, url('${item.artUrlSquare}');` : `background-image: ${gradient};`;
</script>

<div
  class={`
    group flex flex-col
    border-2 border-black bg-slate-600/50
    w-[50%] md:w-[25%] lg:w-[20%] xl:w-[16.6666667%] 2xl:w-[12.5%]
    aspect-square
    bg-center bg-cover cursor-pointer relative
    ${clazz}
  `}
  style={squareBackgroundStyle}
>
  <h3
    class="
      p-1 pt-0 pr-8
      transition-all md:group-hover:pr-0 md:group-hover:text-2xl
      md:text-xl font-bold text-slate-100 text-shadow
    "
  >
    {item.title}
  </h3>
  <div
    class="
      flex items-end mt-auto
      transition-all md:group-hover:opacity-100 md:group-hover:text-xl
      font-bold text-slate-200 opacity-60 uppercase
    "
  >
    <div class="mx-1">{item.rating}/100</div>
    <span class="ml-auto mr-2">{item.mainProp}</span>
  </div>
  <div
    class="
      relative m-1 h-[4px] bg-slate-400 opacity-70
      transition-all md:group-hover:h-[16px] md:group-hover:opacity-80
    "
  >
    <div class="h-full" style={`width: ${item.rating}%; background-color: ${item.ratingColor}`} />
  </div>
</div>
