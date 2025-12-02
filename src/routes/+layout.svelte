<script>
	import { resolve } from '$app/paths';
	import '$lib/style/global.css';
	let { children } = $props();

	const home = resolve(`/`);
	const about = resolve('/about')
</script>

<div class="site-container">
	<header class="header-frame">
		<img alt="Fabricom Header" src="images/fabricom_header.jpg"/>
	</header>

	<div class="main-frame">
		<aside class="sidebar">
			<div class="nav-title">NAVIGATION</div>
			<hr />
			<nav>
				<a href={home}>Home</a>
				<a href={home}>Products</a>
				<a href={home}>Services</a>
				<a href={about}>About Us</a>
				<a href={home}>Contact</a>
			</nav>
			<hr/>
			<div class="sidebar-box">
				<b>NEWS:</b><br />
				Fabricom acquires new pneu-matic patent.<br />
				<small>12/Oct/1998</small>
			</div>
		</aside>

		<main class="content">
			{@render children()}
		</main>
	</div>

	<footer class="footer-frame">
		Copyright &copy; 1998 Fabricom Systems. All rights reserved.<br />
		Optimized for Netscape Navigator 4.0 at 800x600 resolution.
	</footer>
</div>

<style>
	/* Isso simula a estrutura de tabela antiga */
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

	.header-frame {
		background-color: #000000; /* Azul Corporativo IBM/Microsoft */
		color: white;
		padding: 15px;
		border-bottom: 4px solid #808080;
	}

	/* Layout de duas colunas */
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
		background-color: white; /* Papel branco para leitura */
		padding: 20px;
		font-family: 'Times New Roman', serif; /* Fonte padrão da web antiga */
	}

	.footer-frame {
		background-color: #808080;
		color: white;
		text-align: center;
		font-size: 12px;
		padding: 10px;
		border-top: 2px solid #404040;
	}

	/* Estilo dos Links na Lateral */
	nav a {
		display: block;
		color: #000080;
		text-decoration: none;
		margin-bottom: 6px;
		padding: 2px 5px;
		border: 1px solid transparent;
	}

	nav a:hover {
		background-color: #000080;
		color: white;
		border: 1px dotted white;
	}
</style>
