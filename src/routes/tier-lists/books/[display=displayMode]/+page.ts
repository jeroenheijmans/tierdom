import { books } from '$lib/data/books';
import { TierList } from '$lib/models/TierList';
import { Book } from '$lib/models/Book';

export const load = ({ params }) => {
  const tierList = new TierList<Book>();
  books.forEach((b) => tierList.level[b.tierLevel].items.push(new Book(b)));
  return {
    display: params.display,
    tierList,
  };
};
