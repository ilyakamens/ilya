<script lang="ts">
  import { onMount } from "svelte";
  import { datiImages } from "@/assets/dati/images";

  let index = $state(0);

  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % datiImages.length;
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<main class="container">
  <div class="content">
    {#each datiImages as src, i}
      <img {src} alt="Dati {i + 1}" class:visible={i === index} />
    {/each}
  </div>
</main>

<style>
  .content {
    position: relative;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    min-height: 80vh;
  }

  img {
    position: absolute;
    max-height: 80vh;
    max-width: 100%;
    object-fit: contain;
    visibility: hidden;
  }

  img.visible {
    visibility: visible;
  }
</style>
