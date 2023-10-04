<script lang="ts">
    import { collection, addDoc } from "firebase/firestore";
    import { database, imageSource, selectedModel, user } from "../store/store";
    import CircularProgressBar from "./CircularProgressBar.svelte";
    import { getGeneratedImageUrl } from "../api/api";

    let value: string = "";
    let isLoading: boolean = false;
    
    const keydown = async (event: KeyboardEvent) => {
        if(event.key === 'Enter') {
            const email = $user?.email!;
            const collectionRef = collection($database!, email);

            isLoading = true;
            const url = await getGeneratedImageUrl(value);
            
            isLoading = false;
            imageSource.set(url);
            
            await addDoc(collectionRef, { prompt: value, responseUrl: $imageSource, model: $selectedModel });
            value = "";
        }
    }
</script>

<div class="input-container">
    {#if isLoading}
        <CircularProgressBar/>
    {/if}
    <input type="text" placeholder="Imagine" bind:value={ value } on:keydown={ keydown }>
</div>

<style>
    .input-container {
        display: flex;
        flex: 1;
        position: fixed;
        bottom: 0;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: mediumaquamarine;
    }

    input {
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        border: none;
        margin-left: 10px;
        margin-right: 10px;
    }
    
</style>
