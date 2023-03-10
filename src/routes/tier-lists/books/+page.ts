import { books } from '$lib/data/books';
import { TierList } from '../_components/TierList';
import { Book } from './Book';

export const load = () => {
  const tierList = new TierList<Book>();
  books.forEach((b) => tierList.level[b.tierLevel].items.push(new Book(b)));
  return {
    tierList,
  };
};
