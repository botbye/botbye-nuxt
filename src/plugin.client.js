import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { initChallenges } from "./client.js";
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const botbye = config.public.botbye;
    try {
        initChallenges(botbye);
    }
    catch (error) {
        console.error("Failed to initialize @botbye/client:", error);
    }
});
