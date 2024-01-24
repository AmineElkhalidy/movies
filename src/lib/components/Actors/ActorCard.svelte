<script>
  // @ts-nocheck
  import { onMount } from "svelte";

  export let profile_path;
  export let name;

  const updatedName = name.toLowerCase().split(" ").join("-");

  $: href = `/actors/${updatedName}`;

  const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
      social = document.getElementById(socialCard);

    toggle.addEventListener("click", () => {
      // If the animation class exists, we add the down-animation class
      if (social.classList.contains("animation")) {
        social.classList.add("down-animation");

        // We remove the down-animation class
        setTimeout(() => {
          social.classList.remove("down-animation");
        }, 1000);
      }

      // We add the animation class to the div tag with the card__social class
      social.classList.toggle("animation");
    });
  };

  onMount(() => showSocial("card-toggle", "card-social"));
</script>

<!-- <article class="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
  <a {href}>
    <img
      class="rounded-t-lg"
      src={"https://image.tmdb.org/t/p/w500" + profile_path}
      alt={name}
    /></a
  >

  <div class="p-5">
    <h3
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {name}
    </h3>
  </div>
</article> -->

<article class="card">
  <div class="card__border">
    <img
      src={"https://image.tmdb.org/t/p/w500" + profile_path}
      alt={name}
      class="card__img"
    />
  </div>

  <h3 class="card__name">{name}</h3>
  <span class="card__profession">Actor</span>

  <div class="card__social" id="card-social">
    <div class="card__social-control">
      <!-- Toggle button -->
      <div class="card__social-toggle" id="card-toggle">
        <i class="ri-add-line"></i>
      </div>

      <span class="card__social-text">My social networks</span>

      <!-- Card social -->
      <ul class="card__social-list">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="card__social-link"
        >
          <i class="ri-facebook-line"></i>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="card__social-link"
        >
          <i class="ri-instagram-line"></i>
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          class="card__social-link"
        >
          <i class="ri-twitter-line"></i>
        </a>
      </ul>
    </div>
  </div>
</article>

<style>
  :root {
    /*========== Colors ==========*/
    /*Color mode HSL(hue, saturation, lightness)*/
    --first-color: hsl(29, 80%, 58%);
    --first-color-light: hsl(29, 80%, 70%);
    --black-color: hsl(29, 16%, 10%);
    --text-color: hsl(29, 8%, 65%);
    --body-color: hsl(29, 100%, 99%);
    /*========== Font and typography ==========*/
    /*.5rem = 8px | 1rem = 16px ...*/
    --h3-font-size: 1.125rem;
    --smaller-font-size: 0.75rem;
  }

  /*=============== CARD ===============*/

  .card {
    position: relative;
    width: 256px;
    background-color: var(--black-color);
    padding: 1.25rem 2rem 3rem;
    border-radius: 1.5rem;
    text-align: center;
    box-shadow: 0 4px 16px hsla(29, 75%, 8%, 0.2);
  }
  .card__img {
    width: 96px;
    border-radius: 50%;
  }
  .card__border {
    width: 110px;
    height: 110px;
    border: 2px solid var(--first-color);
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto 0.75rem;
  }
  .card__name {
    color: var(--first-color);
    font-size: var(--h3-font-size);
    font-weight: 500;
  }
  .card__profession {
    color: var(--text-color);
    font-size: var(--smaller-font-size);
    font-weight: 500;
  }
  .card__social {
    width: 200px;
    background-color: var(--first-color);
    padding: 0.75rem;
    border-radius: 3rem;
    text-align: initial;
    box-shadow: 0 8px 24px hsla(29, 75%, 56%, 0.3);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1.75rem;
    margin: 0 auto;
    overflow: hidden;
    transform-origin: 18px 17px;
  }
  .card__social-control {
    position: relative;
    transform-origin: 18px 18px;
    transition: transform 0.45s ease;
    transform: rotate(0);
  }
  .card__social-toggle {
    display: inline-flex;
    background-color: var(--black-color);
    color: var(--first-color);
    font-size: 1.25rem;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
  .card__social-text {
    display: block;
    color: var(--black-color);
    font-size: var(--smaller-font-size);
    font-weight: 500;
  }
  .card__social-list {
    display: inline-flex;
    column-gap: 0.75rem;
    transform: rotate(135deg);
    transform-origin: 18px 17px;
  }
  .card__social-link {
    display: inline-flex;
    background-color: var(--first-color-light);
    color: var(--black-color);
    font-size: 1.25rem;
    padding: 6px;
    border-radius: 50%;
  }
  .card__social-text,
  .card__social-list {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 3.1rem;
  }
  .card__social-text {
    top: 0.5rem;
  }

  /* Rotate social */
  .animation .card__social-control {
    transform: rotate(-135deg);
  }

  /* Up animation */
  .card__social.animation {
    animation: up-animation 1s ease-in-out forwards;
  }

  @keyframes up-animation {
    0%,
    100% {
      transform: rotate(0);
    }
    50%,
    60% {
      transform: rotate(-3deg);
    }
    88% {
      transform: rotate(1deg);
    }
  }
  /* Down animation */
  .card__social.down-animation {
    animation: down-animation 1s ease-in-out forwards;
  }

  @keyframes down-animation {
    0%,
    100% {
      transform: rotate(0);
    }
    50%,
    60% {
      transform: rotate(6deg);
    }
    88% {
      transform: rotate(-1deg);
    }
  }
</style>
