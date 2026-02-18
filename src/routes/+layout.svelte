<script lang="ts">
  import "../app.css";
  import "../app.scss";

  import { setContext, type Snippet } from "svelte";
  const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
  <div
    class="flex flex-wrap items-center justify-center px-5 md:px-20 lg:px-40 gap-10 mb-10"
  >
    <h1
      class="font-myfont lg:text-5xl md:text-4xl sm:text-3xl text-2xl leading-tight mt-5"
    >
      TRISTEN<span class="block">KURUTZ</span>
    </h1>

    <!-- Nav buttons, are on far right for larger screens and are stacked next to the logo for the smaller screens-->
    <div
      class="nav flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 items-start sm:items-center mt-5 sm:mt-0 ml-5"
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

<div class="mt-20 px-5 md:px-20 lg:px-40">
  {@render children()}
</div>
