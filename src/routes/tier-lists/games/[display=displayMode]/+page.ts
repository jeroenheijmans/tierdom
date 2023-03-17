import { games } from '$lib/data/games';
import { TierList } from '$lib/models/TierList';
import { Game } from '$lib/models/Game';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  const tierList = new TierList<Game>();
  games.forEach((g) => tierList.level[g.tierLevel].items.push(new Game(g)));
  return {
    display: params.display,
    tierList,
  };
}) satisfies PageLoad;
