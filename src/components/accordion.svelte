<script lang="ts">
  import { BxDownArrow, BxUpArrow } from "svelte-boxicons";

  export let open: boolean = false;

  export let title;
  export let bullets;

  function toggleOpen() {
    open = !open;
  }
</script>

<div id="accordion" class="mt-6">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    id="accordion-top"
    class="flex items-center gap-6 cursor-pointer"
    on:click={toggleOpen}
  >
    <h4 id="accordion-header">{title}</h4>
    <button id="dropdown-icon" class="shrink-0">
      {#if !open}
        <BxDownArrow />
      {:else}
        <BxUpArrow />
      {/if}
    </button>
  </div>
  {#if open}
    <div id="accordion-content">{bullets}</div>
  {/if}
</div>
