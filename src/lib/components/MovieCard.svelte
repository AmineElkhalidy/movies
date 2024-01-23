<script>
  // @ts-nocheck

  export let movie;
  console.log(movie);
</script>

<div class="card w-96 bg-base-100 shadow-xl cursor-pointer">
  <figure class="h-72">
    <img
      class="object-cover"
      src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
      alt={movie.title}
    />
  </figure>

  <div class="card-body">
    <div class="flex items-center justify-between">
      <h2 class="card-title">
        {movie.title}
      </h2>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">{movie.release_date}</div>
      </div>
    </div>
    <p>{movie.overview}</p>

    <div class="card-actions justify-end">
      <button class="btn btn-primary">Learn More</button>
    </div>
  </div>
</div>

<style>
</style>
