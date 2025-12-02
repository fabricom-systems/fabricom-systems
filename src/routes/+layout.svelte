<script>
	import '$lib/style/global.css';
	import { PageHeader, NavBar, PageFooter } from "$lib/components"
	let { children } = $props();
</script>

<div class="site-container">
	
	<PageHeader />

	<div class="main-frame">
		<aside class="sidebar">
			<NavBar/>
		</aside>

		<main class="content">
			{@render children()}
		</main>
	</div>

	<PageFooter/>

</div>

<style>
	.site-container {
		width: 100%;
		max-width: 900px; /* Largura clássica de monitor CRT */
		margin: 0 auto; /* Centraliza na tela */
		background-color: #c0c0c0; /* Cinza Windows padrão */
		border: 2px solid #fff; /* Borda 3D fake (luz) */
		border-right-color: #404040; /* Borda 3D fake (sombra) */
		border-bottom-color: #404040;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.main-frame {
		display: grid;
		grid-template-columns: 200px 1fr; /* Lateral fixa 200px, resto fluido */
		flex-grow: 1;
		border-top: 1px solid #fff;
	}

	.sidebar {
		background-color: #d4d0c8;
		padding: 10px;
		border-right: 2px groove white; /* Borda estilosa antiga */
		font-family: Arial, sans-serif;
		font-size: 14px;
	}

	.content {
		background-color: white;
		padding: 20px;
		font-family: 'Times New Roman', serif;
	}
</style>
