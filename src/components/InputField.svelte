<script lang="ts">
    import { collection, addDoc } from "firebase/firestore";
    import { database, user } from "../store/store";

    let value: string = "";
    
    const keydown = async (event: KeyboardEvent) => {
        if(event.key === 'Enter') {
            
            const email = $user?.email!;
            const collectionRef = collection($database!, email);
            
            await addDoc(collectionRef, { prompt: value });
        }
    }
</script>

<div class="input-container">
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
        background-color: #3498db;
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
