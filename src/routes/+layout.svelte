<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
  import "../app.sass";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
