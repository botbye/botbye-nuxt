import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
import { initChallenges } from 'botbye-client';
import { MODULE_NAME, MODULE_VERSION } from "./constants";
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const options = {
        api: config.public.api,
        clientKey: config.public.clientKey,
        withoutSessions: config.public.withoutSessions,
        withoutReload: config.public.withoutReload,
        withoutRemoteStorage: config.public.withoutRemoteStorage,
        internal: {
            integration: {
                version: MODULE_VERSION,
                type: MODULE_NAME,
            }
        },
    };
    try {
        initChallenges(options);
    }
    catch (error) {
        console.error('Failed to initialize botbye-client:', error);
    }
});
