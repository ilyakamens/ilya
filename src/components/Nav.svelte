<script lang="ts">
  let { hash }: { hash: string } = $props();
</script>

<nav class="container-fluid">
  <ul>
    <li><a href="#/" class:active={hash !== "#/dati"}>Home</a></li>
    <li><a href="https://sunnychildsupport.org/" target="_blank">Sunny</a></li>
    <li><a href="https://cinequote.fr/" target="_blank">Cinéquote</a></li>
    <li><a href="https://www.nbacal.com/" target="_blank">NBA Cal</a></li>
    <li><a href="#/dati" class:active={hash === "#/dati"}>Dati</a></li>
  </ul>
</nav>

<style>
  nav {
    padding-block: 0.5rem;
    padding-left: 2rem;
  }

  a.active {
    text-decoration: underline;
  }
</style>
