<script lang="ts">
    import Button from "./Button.svelte";
    import { database, user } from "../store/store";
    import { deleteDoc, doc } from "firebase/firestore";

    export let prompt: any = "";
    
    let promptName = prompt.data().prompt;
    let id = prompt.id;

    const removeItem = async () => {
        const email = $user?.email!;
        const documentReference = doc($database!, email, id);

        await deleteDoc(documentReference);

        promptName = "Removed";
    };

</script>

<div class="historyItem">
    <h2>{ promptName }</h2>
    <Button text="Delete" onClick={removeItem}/>
</div>
<hr>

<style>
    hr {
        width: 100%;
        background-color: black;
    }
    .historyItem {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-family: Arial, Helvetica, sans-serif;
        margin: 16px;
    }
</style>