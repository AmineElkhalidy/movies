import { writable } from "svelte/store";

// Define the writable store
const movies = writable([]);
const key = import.meta.env.VITE_TMDB;

// Function to fetch movies from the API
const fetchMovies = async () => {
  try {
    // Make a fetch request to your API endpoint
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }

    // Parse the response JSON
    const data = await response.json();

    // Update the movies store with the fetched data
    movies.set(data.results);
  } catch (error) {
    console.error(error);
  }
};

// Export the movies store and the fetchMovies function
export { movies, fetchMovies };
