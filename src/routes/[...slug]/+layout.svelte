<script lang="ts">
	import type { LayoutData } from './$types';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let data: LayoutData;

	// Make language and translations available to child components via context
	const langStore = writable(data.lang);
	const tStore = writable(data.t);

	setContext('lang', langStore);
	setContext('t', tStore);

	// Update stores if layout data changes reactively
	$: $langStore = data.lang;
	$: $tStore = data.t;
</script>

<slot />
