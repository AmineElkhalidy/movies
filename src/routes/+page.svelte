<script lang="ts">
  import type { PageData } from "./$types";
  import PopularMovies from "$lib/components/PopularMovies.svelte";

  export let data: PageData;
</script>

<main class="p-6">
  <PopularMovies movies={data} />
</main>
