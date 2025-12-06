<script>
	export let data;

    let date = new Date(data.meta.date);
    let publishedAt = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
</script>

<article>
    <p><b>Published At:</b> {publishedAt}</p>
	<h1>{data.meta.title}</h1>
	
    <svelte:component this={data.content} />
</article>