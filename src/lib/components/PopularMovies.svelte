<script>
  import MovieCard from "./MovieCard.svelte";

  /**
   * @type {{ data: any; }}
   */
  export let movies;
</script>

<h2 class="text-xl md:text-2xl mb-6 text-gray-200">Popular Movies</h2>

<div class="w-full flex justify-center items-center">
  <div class="grid md:grid-cols-3 gap-10">
    {#each movies.data as movie}
      <MovieCard {movie} />
    {/each}
  </div>
</div>
