import { derived, writable, get } from 'svelte/store';

import { goto } from '$app/navigation';
import { page } from '$app/stores';

export type Display = 'grid' | 'rows';

export const layoutMode = (function () {
  const { subscribe, set, update } = writable<Display>('grid');

  return {
    set,
    subscribe,
    toggle: (mode: Display) => {
      const $page = get(page);
      $page.url.searchParams.set('display', mode.toLocaleString());
      goto(`?${$page.url.searchParams}`);
      update(() => mode);
    },
  };
})();
