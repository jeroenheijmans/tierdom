<script lang="ts">
  import ItemSquare from '../_components/ItemSquare.svelte';
  import TierContainer from '../_components/TierContainer.svelte';
  export let data: any;
</script>

<div class="flex flex-col gap-1 bg-black/50 my-2">
  {#each data.tierList.tiers as tier}
    <TierContainer {tier}>
      {#each tier.items as item}
        <ItemSquare {item} />
      {/each}
    </TierContainer>
  {/each}
</div>
