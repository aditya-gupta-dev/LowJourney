<script>
    import { beforeUpdate } from "svelte";
    import { models } from "../config";
    import { selectedModel } from "../store/store";

    let availableModels = Object.keys(models);
    
    beforeUpdate(() => {
        if($selectedModel) {
            localStorage.setItem("selectedModel", $selectedModel);
        }
    });
  </script>
  
<select bind:value={ $selectedModel }>
    {#each availableModels as option (option)}
      <option value={option}>{option}</option>
    {/each}
</select>