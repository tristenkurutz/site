<script lang="ts">
  import "../app.css";
  import "../app.scss";

  import { setContext, type Snippet } from "svelte";
  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
  <div
    class="container-main flex flex-wrap justify-between items-center gap-5 mb-10"
  >
    <h1 class="font-myfont lg:text-6xl md:text-5xl text-4xl leading-tight mt-5">
      TRISTEN<span class="block">KURUTZ</span>
    </h1>

    <!-- Nav buttons, are on far right for larger screens and are stacked next to the logo for the smaller screens-->
    <div
      class="nav flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 items-start sm:items-center mt-5 sm:mt-0 ml-20"
    >
      <button class="hover:text-stone-300 transition-colors duration-300"
        >ABOUT</button
      >
      <button class="hover:text-stone-300 transition-colors duration-300"
        >INDUSTRY EXP.</button
      >
      <button class="hover:text-stone-300 transition-colors duration-300"
        >PROJECTS</button
      >
      <button class="hover:text-stone-300 transition-colors duration-300"
        >CONTACT</button
      >
    </div>
  </div>
</svelte:head>

<div class="container-main mt-20">
  {@render children()}
</div>
