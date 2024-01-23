<script>
  import "../app.css";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
</script>

<Navbar />

<main class="max-w-6xl mx-auto px-6 xl:px-0 my-12">
  <slot />
</main>
