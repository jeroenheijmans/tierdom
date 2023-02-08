export function ratingToHsl(rating: number) {
  if (rating < 0 || rating > 100) {
    throw new Error('Rating must be a number between 0 and 100 inclusive. Cannot create HSL for rating: ' + rating);
  }
  // translate percentage to range [-15, 135] for hue rotation (red to green)
  const hue = -30 + (160 * rating) / 100;
  return `hsl(${hue}, 60%, 40%, 1.0)`;
}
