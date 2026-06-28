<script lang="ts">
  export let open: boolean = false;
  export let title: string;
  export let company: string;
  export let location: string;
  export let startDate: string;
  export let endDate: string;
  export let technologies: string[] = [];
  export let responsibilities: string[] = [];

  function toggleOpen() {
    open = !open;
  }
</script>

<div class="accordion mt-1">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="accordion-top flex items-start justify-between gap-4 cursor-pointer" on:click={toggleOpen}>
    <div class="flex flex-col gap-0.5">
      <h4 class="accordion-company mb-0">{company} <span class="accordion-location">— {location}</span></h4>
            <span class="accordion-role">{title}</span>
            <div class="flex flex-wrap gap-1.5 mb-3 mt-2">
        {#each technologies as tech}
          <span class="accordion-tag">{tech}</span>
        {/each}
      </div>

    </div>
    <div class="flex flex-col items-end gap-1 shrink-0">
      <span class="accordion-dates">{startDate} – {endDate}</span>
      <span class="accordion-arrow">{open ? '−' : '+'}</span>
    </div>
  </div>

  {#if open}
    <div class="mt-4">
      <ul class="accordion-list">
        {#each responsibilities as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
  {/if}
</div>
