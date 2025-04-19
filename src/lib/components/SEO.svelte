<script lang="ts">
	export let title = '';
	export let description = '';
	export let domain = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={`https://${domain}/`} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />

	<!-- Canonical URL -->
	<link rel="canonical" href={`https://${domain}/`} />

	<!-- Favicon -->
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>
