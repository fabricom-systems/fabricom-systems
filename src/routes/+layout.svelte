<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '98.css'
	import '$lib/style/global.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Fabricom Systems</title>
</svelte:head>

{@render children()}
