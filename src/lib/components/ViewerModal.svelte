<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let show = false;
	export let content = '';

	const dispatch = createEventDispatcher();

	function close() {
		show = false;
		dispatch('close');
	}
</script>

{#if show}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		on:click={close}
		transition:fade={{ duration: 200 }}
	>
		<div
			class="relative bg-base-100 rounded-lg shadow-xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
			on:click|stopPropagation
		>
			<button class="absolute top-2 right-2 btn btn-sm btn-circle btn-ghost" on:click={close}>
				✕
			</button>
			<div class="p-6 overflow-auto h-full">
				<!-- Render SVG content directly -->
				{@html content}
			</div>
		</div>
	</div>
{/if}
