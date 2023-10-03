<script lang="ts">
    import { firebaseCredentials } from "../config";
    import  { initializeApp, type FirebaseApp } from 'firebase/app';
    import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
    import { onMount } from "svelte";
    import { auth, user } from "../store/store";
    import Button from "../components/Button.svelte";
    import InputField from "../components/InputField.svelte";
    import Navbar from "../components/Navbar.svelte";

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

</script>

{#if $user}
    <Navbar/>
    <InputField/>
{:else} 
    <div class="container">
        <div class="container-title">
            <h3>Login</h3>
        </div>
        <Button text="Sign In With Google" onClick={ signIn }/>
    </div>
{/if}

<style>
    h3 {
        font-family: Arial, Helvetica, sans-serif;
    }
    .container-title {
        display: flex;
        justify-content: center;
    }
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

</style>
