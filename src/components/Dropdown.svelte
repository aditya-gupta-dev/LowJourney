<script lang="ts">
    import { beforeUpdate, onMount } from "svelte";
    import { models } from "../config";
    import { selectedModel } from "../store/store";

    let availableModels = Object.keys(models);

    onMount(() => {
      const savedModel: string | null = localStorage.getItem("selectedModel");
      if(savedModel) {
        selectedModel.set(savedModel);
      }
    });
    
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