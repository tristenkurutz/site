<script lang="ts">
  import { BxDownArrow, BxUpArrow } from "svelte-boxicons";

  export let open: boolean = false;

  function toggleOpen() {
    open = !open;
  }
</script>

<div id="accordion" class="mt-5">
  <div id="accordion-top" class="flex">
    <h4 id="accordion-header" class="items-start">title</h4>
    <button id="dropdown-icon" class="ml-auto" on:click={toggleOpen}>
      {#if !open}
        <BxDownArrow />
      {/if}
      {#if open}
        <BxUpArrow />
      {/if}</button
    >
  </div>
  {#if open}
    <div id="accordion-content">content</div>
  {/if}
</div>
