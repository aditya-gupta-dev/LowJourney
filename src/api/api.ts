import { huggingfaceCredentials, models } from "../config";

export async function getGeneratedImageUrl(prompt: string): Promise<string | null> {
    try {
        const response = await fetch(models.stableDiffusion, {
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