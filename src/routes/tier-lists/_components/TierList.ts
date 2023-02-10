export interface Tier<T> {
  level: string;
  items: T[];
  description: string;
}

export class TierList<T> {
  tiers: Tier<T>[];
  level: { [key: string]: Tier<T> } = {};

  constructor() {
    // Allow consumers to get tiers by level:
    this.level['S'] = { level: 'S', items: [], description: 'Absolute best-of-the-best!' };
    this.level['A'] = { level: 'A', items: [], description: 'Top tier' };
    this.level['B'] = { level: 'B', items: [], description: 'Great' };
    this.level['C'] = { level: 'C', items: [], description: 'Good' };
    this.level['D'] = { level: 'D', items: [], description: 'So-so' };
    this.level['E'] = { level: 'E', items: [], description: 'Bad' };
    this.level['F'] = { level: 'F', items: [], description: 'Terrible!' };

    // Allow consumers to iterate over all tiers:
    this.tiers = Object.values(this.level);
  }
}
