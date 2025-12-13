<script>
	import { resolve } from '$app/paths';

	const home = resolve(`/`);
	const about = resolve('/about');
	const blog = resolve('/blog')
</script>

<navbar>
    <div class="nav-title">NAVIGATION</div>
    <hr />
    <nav>
        <a href={home}>Home</a>
        <a href={home}>Products</a>
        <a href={blog}>Blog</a>
        <a href={about}>About Us</a>
        <a href={home}>Contact</a>
    </nav>
    <hr />
    <div class="sidebar-box">
        <b>NEWS:</b><br />
        Fabricom acquires new pneu-matic patent.<br />
        <small>12/Oct/1998</small>
    </div>
</navbar>

<style>
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