<script lang="ts">
    export let text: string = "";
    export let onClick: () => any = () => {};
</script>

<button class="material-button" on:click={ onClick }>{ text }</button>

<style>
    .material-button {
        display: inline-block;
        box-sizing: border-box;
        border: none;
        border-radius: 4px;
        padding: 0 16px;
        min-width: 64px;
        height: 36px;
        vertical-align: middle;
        text-overflow: ellipsis;
        text-transform: uppercase;
        color: #fff;
        background-color: #009688;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
        font-family: "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system;
        font-size: 14px;
        font-weight: 500;
    }
    
    .material-button:hover {
        background-color: #008274;
    }
    
    .material-button:active {
        background-color: #006c67;
    }
</style>