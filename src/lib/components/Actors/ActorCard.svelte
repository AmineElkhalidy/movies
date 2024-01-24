<script>
  // @ts-nocheck

  export let profile_path;
  export let name;

  const updatedName = name.toLowerCase().split(" ").join("-");

  $: href = `/actors/${updatedName}`;
</script>

<article class="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
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
</article>
