import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";
const key = import.meta.env.VITE_TMDB;

export const load = (async ({ fetch }) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );
    const data = await response.json();

    return {
      data: data.results,
    };
  } catch (e) {
    throw error(e.status_code, e.message);
  }
}) satisfies PageLoad;
