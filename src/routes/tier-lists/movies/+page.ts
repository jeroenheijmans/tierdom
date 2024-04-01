import { redirect } from '@sveltejs/kit';

export function load() {
  redirect(302, '/tier-lists/movies/overview');
}
