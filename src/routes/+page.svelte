<script lang="ts">
  import { onMount } from "svelte";
  import { movies, fetchMovies } from "$lib/store/movies";
  import { tvShows, fetchTVShows } from "$lib/store/tvShows";

  onMount(fetchMovies);
  onMount(fetchTVShows);
</script>

<section id="tranding">
  <div class="d-container">
    <h1 class="text-center section-heading">Tranding Movies</h1>
  </div>
  <div class="d-container">
    <div class="swiper tranding-slider">
      <div class="swiper-wrapper">
        {#if $movies.length > 0}
          {#each $movies as movie (movie.id)}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                  alt={movie.title}
                />
              </div>
              <div class="tranding-slide-content">
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">{movie.title}</h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          {/each}
        {:else}
          <div class="skeleton w-64 h-80"></div>
        {/if}
      </div>

      <!-- Slider control -->
      <div class="tranding-slider-control">
        <div class="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div class="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="tranding">
  <div class="d-container">
    <h1 class="text-center section-heading">Tranding TV Shows</h1>
  </div>
  <div class="d-container">
    <div class="swiper tranding-slider">
      <div class="swiper-wrapper">
        {#if $tvShows.length > 0}
          {#each $tvShows as show (show.id)}
            <div class="swiper-slide tranding-slide">
              <div class="tranding-slide-img">
                <img
                  src={"https://image.tmdb.org/t/p/w500" + show.poster_path}
                  alt={show.title}
                />
              </div>
              <div class="tranding-slide-content">
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">{show.title}</h2>
                  <h3 class="food-rating">
                    <span>4.5</span>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          {/each}
        {:else}
          <div class="skeleton w-64 h-80"></div>
        {/if}
      </div>

      <!-- Slider control -->
      <div class="tranding-slider-control">
        <div class="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div class="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
      </div>
    </div>
  </div>
</section>
