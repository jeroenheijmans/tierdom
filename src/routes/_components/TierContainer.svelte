<script lang="ts">
  export let tier: any;
</script>

<div
  class={`
    flex min-h-[4rem]
    bg-neutral-800/50 border-4 border-${tier.level}-tier
  `}
>
  <div
    class={`
      basis-8 md:basis-16 pr-2 shrink-0
      grid place-items-center
      bg-${tier.level}-tier font-bold uppercase text-4xl text-slate-900/90
    `}
    title={tier.description}
  >
    {tier.level}
  </div>
  <div class="flex flex-wrap gap-0 p-0 w-full">
    <slot />
  </div>
</div>
