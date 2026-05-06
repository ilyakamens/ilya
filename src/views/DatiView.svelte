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

<main class="relative mx-auto flex min-h-[80vh] max-w-5xl items-start justify-center px-6 pt-8">
  {#each datiImages as src, i}
    <img
      {src}
      alt="Dati {i + 1}"
      class="absolute max-h-[80vh] max-w-full object-contain"
      class:invisible={i !== index}
    />
  {/each}
</main>
