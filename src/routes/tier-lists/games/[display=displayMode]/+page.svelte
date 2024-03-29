<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  import type { Item } from '$lib/models/Item';

  import InfoBox from '$lib/components/InfoBox.svelte';
  import ItemModal from '$lib/components/ItemModal.svelte';
  import ItemRectangle from '$lib/components/ItemRectangle.svelte';
  import ItemSquare from '$lib/components/ItemSquare.svelte';
  import TierContainer from '$lib/components/TierContainer.svelte';

  export let data;

  let selected: Item | null = null;

  function select(item: Item | null) {
    selected = item;
    const currentPath = $page.url.pathname;
    const url = !item ? currentPath : `${currentPath}#${item.code}`;
    goto(url, { noScroll: true });
  }

  function onHashChangedThroughBrowser() {
    const hash = location.hash.substring(1);
    selected = data.tierList.findByCode(hash);
  }

  onMount(() => {
    const hash = $page.url.hash.substring(1);
    selected = data.tierList.findByCode(hash);
  });
</script>

<svelte:window on:hashchange={onHashChangedThroughBrowser} />

{#if selected}
  <ItemModal item={selected} on:dismiss={() => select(null)} />
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
          <ItemSquare on:click={() => select(item)} {item} />
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
