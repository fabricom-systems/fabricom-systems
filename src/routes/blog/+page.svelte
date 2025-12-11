<script lang="ts">
	import path from "path";

    type PostMetadata = {
        title: string,
        date: string,
        id: number,
        slug: string
    }

    type PostFile = {
        metadata: PostMetadata
    }

    const paths = import.meta.glob("/src/posts/*.md", {eager: true});

    const totalPosts = Object.entries(paths).map(([path, file]) => {
        const slug = path.split('/').pop()?.replace('.md', '');
        return {
            slug,
            ...(file as PostFile).metadata
        }
    });

    const itemsPerPage = 10;
    let currentPage = $state(1);
    const totalPages = $state(Math.ceil(totalPosts.length / itemsPerPage));
    let posts = $state(getPostsToShow());

    function nextPage() {
        if(currentPage === totalPages) { return; }
        currentPage++;
        updatePostsToShow();
    }

    function previousPage() {
        if(currentPage === 1) { return; }
        currentPage--;
        updatePostsToShow();
    }

    function updatePostsToShow() {
        posts = getPostsToShow();
    }

    function getPostsToShow() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return totalPosts.slice(start, end);
    }

</script>


<h1>Blog Posts</h1>

<div class="container">
    <ul class="posts">
        {#each posts as post}
            {@render postItem(post)}
        {/each}
    </ul>
    <div class="pagination">
        <div class="pagination-buttons">
            {#if currentPage > 1}
                <button onclick={previousPage}> &lt; </button>
            {/if}
            <span>{currentPage} / {totalPages}</span>
            {#if currentPage < totalPages}
                <button onclick={nextPage}> &gt; </button>
            {/if}
        </div>
    </div>
</div>

{#snippet postItem(post: PostMetadata)}
	<li class="post-item">
        <a href="blog/{post.slug}" class="post-title">#{post.id} - {post.title}</a>
        <span class="post-date">({post.date})</span>
    </li>
{/snippet}

<style>

    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .posts {
        flex-grow: 1;
    }

    .post-item {
        list-style-type: none;
    }

    .post-title {
        font-size: 20px;
    }

    .post-date {
        font-size: 14px;
    }

    .pagination {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pagination-buttons {
        font-weight: bold;
    }

</style>