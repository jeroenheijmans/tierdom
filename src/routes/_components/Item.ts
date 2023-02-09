export interface Item {
  tierLevel: string;
  code: string;
  title: string;
  rating: number;
  hasArt: boolean;
  description: string;
  props: { [key: string]: string };

  mainProp: string;
  ratingColor: string;
  artUrlSquare: string | null;
  iconUrl: string | null;
}
