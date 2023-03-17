import { games } from '$lib/data/games';
import { TierList } from '../../_components/TierList';
import { Game } from '../Game';
import type { PageLoad } from './$types';

export const load = (({ params }) => {
  const tierList = new TierList<Game>();
  games.forEach((g) => tierList.level[g.tierLevel].items.push(new Game(g)));
  return {
    display: params.display,
    tierList,
  };
}) satisfies PageLoad;