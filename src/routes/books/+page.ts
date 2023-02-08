import { ratingToHsl } from '../../lib/components/util';
import type { Item } from '../_components/Item';
import { TierList } from '../_components/TierList';

export const load = () => {
  const tierList = new TierList<Item>();
  // TODO: Load list of items
  tierList.level['S'].items.push({
    tierLevel: 'S',
    code: 'dummy-item',
    title: 'Dummy Book',
    rating: 95,
    hasArt: false,
    description: 'Dummy',
    props: {},
    mainProp: 'Dummy',
    ratingColor: ratingToHsl(95),
    artUrlSquare: null,
  });
  return {
    tierList,
  };
};
