<!-- credit to flowbite for this component -->
<!-- https://flowbite.com/docs/forms/toggle/ -->
<script lang="ts">
  const {
    checked = false,
    label,
    onchange,
  }: {
    checked?: boolean;
    label: string;
    onchange?: (value: boolean) => void;
  } = $props();
</script>

<label class="inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    class="sr-only peer"
    {checked}
    onchange={(e) => onchange?.(e.currentTarget.checked)}
  />
  <div
    class="relative w-9 h-5 bg-white/20 contrast:bg-white/40 rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-white/40 peer-checked:bg-yellow-300 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:bg-stone-900 rtl:peer-checked:after:-translate-x-full"
  ></div>
  <span
    class="select-none ms-3 text-xs tracking-widest uppercase text-white/60 contrast:text-white"
    >{label}</span
  >
</label>
