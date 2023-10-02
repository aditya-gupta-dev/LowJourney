<script lang="ts">
    import { firebaseCredentials } from "../config";
    import  { initializeApp, type FirebaseApp } from 'firebase/app';
    import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
    import { onMount } from "svelte";
    import { auth, user } from "../store/store";

    let app: FirebaseApp | undefined = undefined;

    onMount(async () => {
        app = initializeApp(firebaseCredentials);
    });

    const signIn = async () => {
        auth.set(getAuth(app));
        const provider = new GoogleAuthProvider();

        await signInWithPopup($auth!, provider);

        onAuthStateChanged($auth!, (observer) => {
            user.set(observer);
        });
    }

    const signOut = async () => {
       await $auth?.signOut();
    }
</script>

{#if $user}
    <h1>You are signed in</h1>
    <button on:click={ signOut }>Sign Out</button>
{:else}
    <button on:click={ signIn }>Login</button>
{/if}
