<script lang="ts">
  import ActorCard from "$lib/components/Actors/ActorCard.svelte";
  import { actors, fetchActors } from "$lib/store/actors";
  import { onMount } from "svelte";

  onMount(fetchActors);
</script>

<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
  {#if $actors.length > 0}
    {#each $actors as actor (actor.id)}
      <ActorCard {...actor} />
    {/each}
  {:else}
    <div class="skeleton w-64 h-80"></div>
  {/if}
</div>
