<script lang="ts">
  let { hash }: { hash: string } = $props();
</script>

<nav class="container-fluid">
  <ul>
    <li><a href="#/" class:active={hash !== "#/dati"}>Home</a></li>
    <li><a href="#/dati" class:active={hash === "#/dati"}>Dati</a></li>
  </ul>
</nav>

<style>
  nav {
    padding-block: 0.5rem;
  }

  a:focus,
  a:active {
    --pico-color: var(--pico-primary);
  }

  a.active {
    text-decoration: underline;
  }
</style>
