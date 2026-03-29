<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Media Hub</title>
	<meta name="description" content="Personal media tracking hub" />
</svelte:head>

{@render children()}
