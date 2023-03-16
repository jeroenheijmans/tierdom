<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import InfoBox from '$lib/components/InfoBox.svelte';
  import { onMount } from 'svelte';
  import ItemModal from '../../_components/ItemModal.svelte';
  import ItemRectangle from '../../_components/ItemRectangle.svelte';
  import ItemSquare from '../../_components/ItemSquare.svelte';
  import TierContainer from '../../_components/TierContainer.svelte';
  import type { Book } from './Book';

  export let data;

  let selected: Book | null = null;

  function select(item: Book | null) {
    selected = item;
    const currentPath = $page.url.pathname;
    const url = !item ? currentPath : `${currentPath}#${item.code}`;
    goto(url);
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
  <ItemModal item={selected} on:dismiss={() => select(null)}>ISBN {selected.isbn}</ItemModal>
{/if}

<InfoBox clazz="my-4">
  <p>
    Tiers indicate what books mean to me; how much I'd recommend reading them. Rating is the actual quality of a book (given its context and
    time period).
  </p>
</InfoBox>

<div class="flex flex-col gap-1 bg-black/50 my-2">
  {#each data.tierList.tiers as tier}
    <TierContainer {tier}>
      {#each tier.items as item}
        {#if data.display === 'detailed'}
          <ItemRectangle {item}>, ISBN {item.isbn}</ItemRectangle>
        {:else}
          <ItemSquare {item} on:click={() => select(item)} />
        {/if}
      {/each}
    </TierContainer>
  {/each}
</div>

<!-- prettier-ignore -->
<div class="max-w-4xl">
  <h2 class="text-xl font-bold mt-4">Where's the rest!?</h2>
  <p class="mt-2">
    I've read many more books of course, but they're not on this list.
    First off, there's <strong>no fiction</strong> on this tier list.
    I read very little of it, certainly not enough to have an interesting list of them.
  </p>
  <p class="mt-4">
    Second, the list only contains books that could be considered a "must read" by at least some people.
    So <strong>no super-specific books</strong> like "ASP.NET 4 Internals" or "HTML 3.2 in 24 Hours" on here either.
  </p>
  <p class="mt-4">
    Third, I don't like reading much (even though I do like to <em>have</em> read).
    So I tend to research what the classics and recommended books are before diving in at all.
    Therefore <strong>no fringe books</strong> are likely to appear on my list.
  </p>
  <p class="mt-4">
    Lastly, I can easily drop a book if I dislike it; and not waste any further time on it.
    So <strong>books I quickly stopped reading</strong> (so especially low rated books) don't appear on my tier list because I dropped them before giving them a good rating.
  </p>
</div>
