<script lang="ts">
  import InfoBox from '$lib/components/InfoBox.svelte';
  import type { Item } from '../../_components/Item';
  import ItemModal from '../../_components/ItemModal.svelte';
  import ItemRectangle from '../../_components/ItemRectangle.svelte';
  import ItemSquare from '../../_components/ItemSquare.svelte';
  import TierContainer from '../../_components/TierContainer.svelte';

  export let data: any;
  let selected: Item | null = null;
</script>

{#if selected}
  <ItemModal item={selected} on:dismiss={() => (selected = null)} />
{/if}

<InfoBox clazz="my-4">
  <p>Tiers indicate what games mean to me. Rating is the actual quality of a game (given its context and time period).</p>
</InfoBox>

<div class="flex flex-col gap-1 bg-black/50 my-2">
  {#each data.tierList.tiers as tier}
    <TierContainer {tier}>
      {#each tier.items as item}
        {#if data.display === 'detailed'}
          <ItemRectangle {item} />
        {:else}
          <ItemSquare on:click={() => (selected = item)} {item} />
        {/if}
      {/each}
    </TierContainer>
  {/each}
</div>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h2 class="text-xl font-bold mt-4">Where's the rest!?</h2>
  <p class="mt-2">
    Mmmhhh... these are all the games I remember playing, and for long enough to form an honest opinion on them.
    There might be a handful missing (especially from longer ago), and I will add them when I think of them.
    But 90%+ of all games I've ever (seriously) played should be on here.
  </p>
  <h2 class="text-xl font-bold mt-4">How stable is this tier list?</h2>
  <p class="mt-2">
    Extremely stable! Let me explain.
  </p>
  <p class="mt-4">
    The tier a game belongs to is how 'impactful' it was to me, how much I enjoyed it given its time and context.
    There might then also be several cases where a high tier does <em>not</em> automatically imply a recommendation.
  </p>
  <p class="mt-4">
    New games added (as I play them) will be <em>inserted</em> into the list.
    But this will leave the list otherwise stable.
  </p>
  <h2 class="text-xl font-bold mt-4">What about the xx/100 ratings?</h2>
  <p class="mt-2">
    These indicate how high I rate the <em>quality</em> of the game (also given its time period).
    There's a strong correlation between high tiers and high ratings.
  </p>
  <p class="mt-4">
    Notable exceptions include for example games that <em>mean a lot to me</em>, but might still have a rather low rating because they're still bad games.
    Vice versa some games with high quality didn't click for me, so they might end up in a low tier.
  </p>
</div>
