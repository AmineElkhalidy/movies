import { writable } from "svelte/store";

const actors = writable([]);
const key = import.meta.env.VITE_TMDB;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjA3N2E1M2MxMmJjMzlhNGFmYzllNGMzN2FmOGJmMyIsInN1YiI6IjY1YWZhM2QzODQ4ZWI5MDEwYTlhNjkxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nDDyDKyI8wWWWI8mcEt3GbfSR22LPHRc25BBcZE1Bfo",
  },
};

// Function to fetch movies from the API
const fetchActors = async () => {
  try {
    // Make a fetch request to your API endpoint
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/person/day?language=en-US`,
      options
    );

    if (!response.ok) {
      throw new Error("Failed to fetch people");
    }

    // Parse the response JSON
    const data = await response.json();

    // Update the movies store with the fetched data
    actors.set(data.results);
  } catch (error) {
    console.error(error);
  }
};

// Export the movies store and the fetchMovies function
export { actors, fetchActors };
