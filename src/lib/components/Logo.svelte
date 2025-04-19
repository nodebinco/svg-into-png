<script lang="ts">
  export let size = "h-12 w-12";
  export let color = "text-primary";
</script>

<svg class={`${size} ${color} transition-transform hover:scale-110`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></path>
  <path d="M4 16l4-4a1 1 0 0 1 1.414 0L16 18"></path>
  <path d="M14 14l1-1a1 1 0 0 1 1.414 0L20 17"></path>
  <circle cx="8" cy="8" r="2"></circle>
</svg>