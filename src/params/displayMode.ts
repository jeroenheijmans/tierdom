import type { ParamMatcher } from '@sveltejs/kit';

const displayModes = ['detailed', 'overview'];

export const match = ((param) => {
  return displayModes.includes(param);
}) satisfies ParamMatcher;
