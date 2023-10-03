<script lang="ts">
    import { collection, getDocs } from "firebase/firestore";
    import { onMount } from "svelte";
    import { database, user } from "../store/store";
    import { Link } from "svelte-routing";
    import Button from "../components/Button.svelte";
    import HistoryItem from "../components/HistoryItem.svelte";
    import CircularProgressBar from "../components/CircularProgressBar.svelte";

    let prompts: any[] = [];

    let isLoading: boolean = true;

    onMount(async () => {
        isLoading = true;
        let results: any[] = [];

        const querySnapshot = await getDocs(collection($database!, $user?.email!));
        querySnapshot.forEach((result) => {
            results.push(result);
            
        });
        prompts = results;
        isLoading = false;
    });

    
</script>

{#if $user}
    <div class="title">
        <Link to="/">
            <Button text="Back"/>
        </Link>
        <h1>History</h1>    
    </div>
    <div class="container">
        
        {#if isLoading}
            <div class="circular">
                <CircularProgressBar/>
            </div>    
            {:else}
            {#each prompts as prompt}
                <HistoryItem prompt={ prompt } />
            {/each}
        {/if}
    </div>
{:else}
    <h1>300. user not logged in</h1>
{/if}

<style>
    .circular {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
        padding: 14px;
        background-color: mediumaquamarine;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        margin: 10px;
    }
</style>

