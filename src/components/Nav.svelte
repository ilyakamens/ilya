<script lang="ts">
  let { hash }: { hash: string } = $props();

  type NavLink = { href: string; label: string; routeHash?: string; external?: boolean };

  const internal: NavLink[] = [
    { href: "#/", label: "Home", routeHash: "" },
    { href: "#/misc", label: "Misc", routeHash: "#/misc" },
    { href: "#/dati", label: "Dati", routeHash: "#/dati" },
  ];

  const external: NavLink[] = [
    { href: "https://momumu.fr/", label: "Momumu" },
    { href: "https://sunnychildsupport.org/", label: "Sunny" },
    { href: "https://cinequote.fr/", label: "Cinéquote" },
    { href: "https://www.nbacal.com/", label: "NBA Cal" },
  ];

  const homeHashes = ["", "#/", "#"];
  const isActive = (link: NavLink) => {
    if (link.routeHash === "") return homeHashes.includes(hash);
    return hash === link.routeHash;
  };
</script>

<nav class="flex h-16 items-center px-6 sm:px-10">
  <ul class="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
    {#each internal as link (link.href)}
      {@const active = isActive(link)}
      <li>
        <a
          href={link.href}
          class="transition-colors hover:text-stone-900 dark:hover:text-stone-100"
          class:font-medium={active}
          class:text-stone-900={active}
          class:dark:text-stone-100={active}
          class:text-stone-500={!active}
          class:dark:text-stone-400={!active}
        >
          {link.label}
        </a>
      </li>
    {/each}

    <li class="ml-2 h-4 w-px bg-stone-300 dark:bg-stone-700" aria-hidden="true"></li>

    {#each external as link (link.href)}
      <li>
        <a
          href={link.href}
          target="_blank"
          class="text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
