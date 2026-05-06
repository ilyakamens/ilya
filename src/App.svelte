<script lang="ts">
  import Nav from "./components/Nav.svelte";
  import HomeView from "./views/HomeView.svelte";
  import DatiView from "./views/DatiView.svelte";
  import MiscView from "./views/MiscView.svelte";
  import { datiImages, preloadImages } from "./assets/dati/images";

  let hash = $state(window.location.hash);

  $effect(() => {
    const onHashChange = () => (hash = window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  });

  preloadImages(datiImages);
</script>

<Nav {hash} />

{#if hash === "#/dati"}
  <DatiView />
{:else if hash === "#/misc"}
  <MiscView />
{:else}
  <HomeView />
{/if}
