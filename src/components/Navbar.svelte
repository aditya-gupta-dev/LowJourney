<script>
    import { Link } from "svelte-routing";
    import { auth, user } from "../store/store";
    import Button from "./Button.svelte";

    const signOut = async () => {
        await $auth?.signOut();
    }
</script>

<div class="navbar">
    <h4> { $user?.email } </h4>
    <Button text="Sign Out" onClick={ signOut }/>
    <Link to="/history" class="navigator">
        <Button text="History"/>
    </Link>
</div>

<style>
    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600; 
        margin-right: 14px;
    }
    .navbar {
        background-color: mediumaquamarine;
        color: white;
        padding-top: 4px;
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-end; 
        align-items: center; 
    }
</style>

  

  