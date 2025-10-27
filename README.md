# Nuxt BotBye!

## Install

```bash 
npm i botbye-nuxt
```

```bash 
yarn add botbye-nuxt
```

## Usage

### Server

1. Init BotBye! with `server-key`

```typescript
import {initBotBye} from "botbye-nuxt/server";

initBotBye({
    /* Use your server-key */
    serverKey: "00000000-0000-0000-0000-000000000000"
})

```

2. Add request validation

```typescript

import {botByeRequest, initBotBye} from "botbye-nuxt/server";

export default defineEventHandler(async (event) => {
    const reqHeader = getHeaders(requestEvent);
    const token = getToken(reqHeader);

    const botByeResponse = await botByeRequest({requestEvent: event, token: token});

    const isAllowed = botByeResponse.result.isAllowed;
    if (!isAllowed) {
        return new Error("Error!");
    }

    return /*some data*/
});

```

### Client

1. Init BotBye! using botbye-nuxt/module

```typescript
export default defineNuxtConfig({
    /* some config*/
    modules: ["botbye-nuxt/module"],
    'botbye-module': {
        inject: true
    },
    runtimeConfig: {
        public: {
            /* Use your client-key */
            clientKey: "00000000-0000-0000-0000-000000000000"
        }
    }
})
```

2. To run challenge and generate BotBye! token call runChallenge. Send this token in any convenient way to the server.
   For example in ["x-botbye-token"] header:

```typescript jsx

<script setup>
    import {runChallenge} from "botbye-nuxt";

    async function handleSubmit() {
        const token = await runChallenge();
    
        const res = await $fetch("/api/login", {
                method: "GET",
                headers: {
                ["x-botbye-token"]: token
            }
        })
    }

</script>
```
