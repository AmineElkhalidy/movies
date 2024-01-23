<script>
  export let profile_path;
  export let name;
</script>

<div
  class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <a href="#">
    <img
      class="rounded-t-lg"
      src={"https://image.tmdb.org/t/p/w500" + profile_path}
      alt={name}
    />
  </a>
  <div class="p-5">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {name}
    </h5>
  </div>
</div>
