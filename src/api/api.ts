import { huggingfaceCredentials, models } from "../config";

function getSavedModelFromLocalStorage() {
    const selectedModel: string | null = localStorage.getItem("selectedModel");
    if(selectedModel !== null) {
        return models[`${selectedModel}`];
    } else {
        return models.stableDiffusion;
    }
}

export async function getGeneratedImageUrl(prompt: string): Promise<string | null> {
    try {        
        const savedModel = getSavedModelFromLocalStorage();
        const response = await fetch(savedModel, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${huggingfaceCredentials.apiKey}`
            },
            body: JSON.stringify({ inputs: prompt })
        });
        const buffer = await response.arrayBuffer();
    
        const byteArray = new Uint8Array(buffer);
        const binaryString = String.fromCharCode.apply(null, Array.from(byteArray));
        const base64String = btoa(binaryString);
    
        return `data:image/jpeg;base64,${base64String}`;
    } catch {
        return null;
    }
}