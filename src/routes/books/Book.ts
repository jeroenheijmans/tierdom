import { ratingToHsl } from '../../lib/components/util';
import type { Item } from '../_components/Item';

// Separating parts of an ISBN is hard because
// the parts may have varying lengths. So, we
// only do the stuff we know, and leave the rest.
function naiveIsbnFormatter(input: string) {
  if (!input) return input;
  if (input.length !== 13) return input;

  // prettier-ignore
  return input
    // Languages
    .replace(/^(978|989)([0123457])/, (_, p1, p2) => `${p1}-${p2}-`) // EN/FR/DE/JP/RU/CN
    .replace(/^(978|989)(90|94)/, (_, p1, p2) => `${p1}-${p2}-`) // NL
    .replace(/^(978|989)(91)/, (_, p1, p2) => `${p1}-${p2}-`) // SE
    .replace(/^(978|989)(\d)/, (_, p1, p2) => `${p1}-${p2}`) // the rest

    // Known publisher codes
    .replace(/^(978|989)-(\d)-(0\d|1[0-9]|201|226|231|262|300|321|380|470|471|491|596|610|617|672|674)/, (_, p1, p2, p3) => `${p1}-${p2}-${p3}-`) // the rest

    // Check digit
    .replace(/(\d)$/, (_, p1) => `-${p1}`);
}

export class Book implements Item {
  tierLevel: string;
  code: string;
  title: string;
  rating: number;
  hasArt: boolean;
  description: string;
  props: { [key: string]: string };

  isbn: string;
  mainProp: string;
  ratingColor: string;
  artUrlSquare: string | null;
  iconUrl: string | null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(dto: any) {
    this.tierLevel = dto.tierLevel;
    this.code = dto.code;
    this.title = dto.title;
    this.rating = dto.rating;
    this.hasArt = dto.hasArt;
    this.description = dto.description;
    this.props = dto.props;

    this.isbn = naiveIsbnFormatter(this.props['isbn']);
    this.mainProp = this.props['year'];
    this.ratingColor = ratingToHsl(this.rating);
    this.artUrlSquare = `art/books/${this.code}.png`;
    this.iconUrl = null; // TODO
  }
}
