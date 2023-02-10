<script lang="ts">
  import InfoBox from '$lib/components/InfoBox.svelte';
  import { LayoutMode, layoutMode } from '$lib/stores';
  import ItemRectangle from '../_components/ItemRectangle.svelte';
  import ItemSquare from '../_components/ItemSquare.svelte';
  import TierContainer from '../_components/TierContainer.svelte';
  export let data: any;
</script>

<InfoBox clazz="my-4">
  <p>Tiers indicate what games mean to me. Rating is the actual quality of a game (given its context and time period).</p>
</InfoBox>

<div class="flex flex-col gap-1 bg-black/50 my-2">
  {#each data.tierList.tiers as tier}
    <TierContainer {tier}>
      {#each tier.items as item}
        <ItemRectangle {item} clazz={$layoutMode === LayoutMode.rectangle ? 'auto' : 'hidden'} />
        <ItemSquare {item} clazz={$layoutMode === LayoutMode.square ? 'auto' : 'hidden'} />
      {/each}
    </TierContainer>
  {/each}
</div>
