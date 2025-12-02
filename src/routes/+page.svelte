<script>
    import { draggable } from "@neodrag/svelte";

    let dragOpts = {
        handle: '.title-bar',
        bounds: 'body'
    }
</script>

<div class="main-container">
    <h1>Welcome to Fabricom Systems website!</h1>
</div>

<style>
    .main-container{
        width: 100%;
        height: 100%;
        display: flex;
    }
</style>