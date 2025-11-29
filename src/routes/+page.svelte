<script>
    import { draggable } from "@neodrag/svelte";

    let dragOpts = {
        handle: '.title-bar',
        bounds: 'body'
    }
</script>

<div class="main-container">
    <div class="window" style="width: 300px; height: 60px;" use:draggable={dragOpts}>
        <div class="title-bar">
            <div class="title-bar-text">Fabricom Systems</div>
            <div class="title-bar-controls">
            </div>
        </div>
        <div class="window-body">
            <p>Coming soon!</p>
        </div>
    </div>
</div>

<style>
    .main-container{
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
</style>