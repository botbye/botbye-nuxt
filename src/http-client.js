const bodyToJson = (body) => {
    if (body === null || body === undefined)
        return undefined;
    if (typeof body === "string")
        return body;
    return JSON.stringify(body);
};
const ofetchHttpClient = {
    type: "ofetchHttpClient",
    call: (url, init) => {
        const controller = new AbortController();
        const opts = {
            method: init.method,
            body: bodyToJson(init.body),
            headers: init.headers,
            responseType: "text",
            keepalive: init.keepalive,
            signal: controller.signal,
        };
        const result = $fetch(url, opts).catch((e) => {
            const message = e instanceof Error ? e.message : String(e);
            throw new Error(`REQUEST_ERROR ${message}`);
        });
        return {
            result,
            abort: () => controller.abort(),
        };
    },
};
export { ofetchHttpClient };
