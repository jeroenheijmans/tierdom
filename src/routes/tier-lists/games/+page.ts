import { games } from '$lib/data/games';
import { TierList } from '../_components/TierList';
import { Game } from './Game';

export const load = () => {
  const tierList = new TierList<Game>();
  games.forEach((g) => tierList.level[g.tierLevel].items.push(new Game(g)));
  return {
    tierList,
  };
};
