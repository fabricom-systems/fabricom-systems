<script>
	export let data;

    let date = new Date(data.meta.date);
    let publishedAt = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
</script>

<article>
    <div class="toolbar">
        <a href="/blog">Back</a>
        <span><b>Published At:</b> {publishedAt}</span>
    </div>
	<h1>{data.meta.title}</h1>
	
    <svelte:component this={data.content} />
</article>

<style>
    .toolbar {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>