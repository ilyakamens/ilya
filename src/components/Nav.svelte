<script lang="ts">
  let { hash }: { hash: string } = $props();
</script>

<nav class="container-fluid">
  <ul>
    <li><a href="#/" class:active={hash !== "#/dati"} onclick={(e: MouseEvent) => (e.target as HTMLElement).blur()}>Home</a></li>
    <li><a href="#/dati" class:active={hash === "#/dati"} onclick={(e: MouseEvent) => (e.target as HTMLElement).blur()}>Dati</a></li>
  </ul>
</nav>

<style>
  nav {
    padding-block: 0.5rem;
  }

  a.active {
    text-decoration: underline;
  }
</style>
