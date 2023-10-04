<script lang="ts">
    import { firebaseCredentials } from "../config";
    import  { initializeApp, type FirebaseApp } from 'firebase/app';
    import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
    import { onMount } from "svelte";
    import { auth, database, imageSource, user } from "../store/store";
    import Button from "../components/Button.svelte";
    import InputField from "../components/InputField.svelte";
    import Navbar from "../components/Navbar.svelte";
    import { getFirestore } from "firebase/firestore";
    import Dropdown from "../components/Dropdown.svelte";

    let app: FirebaseApp | undefined = undefined;

    onMount(async () => {
        app = initializeApp(firebaseCredentials);
        database.set(getFirestore());
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
    <div class="image-container">
        <img src={ $imageSource } alt="Type out your imagination"/>
    </div>
    <Dropdown/>
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
    .image-container {
        width: 340px;
        height: 220px;
        border-radius: 12px;
        border: 1px solid #ffaa;
        overflow: hidden;
    }
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
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
