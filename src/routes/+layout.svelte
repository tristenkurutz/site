<script lang="ts">
  import "../app.css";
  import "../app.scss";
  import { onMount, type Snippet } from "svelte";
  import Toggle from "../components/toggle.svelte";

  const { children }: { children: Snippet } = $props();

  let menuOpen = $state(false);
  let highContrast = $state(false);

  const sections = ["about", "experience", "projects", "contact"];

  // the inline script in app.html has already applied the saved preference
  // before paint, so read it back off the element rather than localStorage
  onMount(() => {
    highContrast = document.documentElement.classList.contains("high-contrast");
  });

  function setContrast(on: boolean) {
    highContrast = on;
    document.documentElement.classList.toggle("high-contrast", on);
    localStorage.setItem("high-contrast", String(on));
  }

  function scrollTo(id: string) {
    menuOpen = false;
    const el = document.getElementById(id);
    if (el) {
      const headerHeight = document.querySelector("header")?.offsetHeight ?? 80;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
</script>

<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <title>Tristen Kurutz</title>
</svelte:head>

<header class="sticky top-0 z-10 backdrop-blur-sm bg-black/10">
  <div class="container-main flex items-center justify-between py-4">
    <a class="wordmark font-myfont" href="/" aria-label="home">
      TRISTEN<span class="block">KURUTZ</span>
    </a>

    <nav class="hidden sm:flex gap-8 items-center" aria-label="main navigation">
      {#each sections as s}
        <button class="nav-btn" onclick={() => scrollTo(s)}>
          {s.toUpperCase().replace("EXPERIENCE", "EXP.")}
        </button>
      {/each}
      <Toggle checked={highContrast} label="Contrast" onchange={setContrast} />
    </nav>

    <button
      class="sm:hidden bg-transparent border-0 text-white text-xl cursor-pointer p-1"
      aria-label={menuOpen ? "close menu" : "open menu"}
      onclick={() => (menuOpen = !menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {#if menuOpen}
    <nav
      class="sm:hidden flex flex-col px-6 pb-6 pt-2 gap-4 border-t border-white/10"
      aria-label="mobile navigation"
    >
      {#each sections as s}
        <button class="mobile-nav-btn" onclick={() => scrollTo(s)}>
          {s.toUpperCase().replace("EXPERIENCE", "EXP.")}
        </button>
      {/each}
      <Toggle checked={highContrast} label="Contrast" onchange={setContrast} />
    </nav>
  {/if}
</header>

<main class="container-main pt-8 md:pt-16 pb-24">
  {@render children()}
</main>
