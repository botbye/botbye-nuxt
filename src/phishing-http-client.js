const bodyToJson = (body) => {
    if (body === null || body === undefined)
        return undefined;
    if (typeof body === "string")
        return body;
    return JSON.stringify(body);
};
const ofetchPhishingHttpClient = {
    type: "ofetchPhishingHttpClient",
    call: (url, init) => {
        const controller = new AbortController();
        let responseHeaders = {};
        let responseStatus = 0;
        const opts = {
            method: init.method,
            body: bodyToJson(init.body),
            headers: init.headers,
            responseType: "arrayBuffer",
            signal: controller.signal,
            ignoreResponseError: true,
            onResponse: ({ response }) => {
                responseHeaders = {};
                response.headers.forEach((value, key) => {
                    responseHeaders[key] = value;
                });
                responseStatus = response.status;
            },
        };
        const result = $fetch(url, opts)
            .then((arrayBuffer) => ({
            status: responseStatus,
            headers: responseHeaders,
            body: new Uint8Array(arrayBuffer),
        }))
            .catch((e) => {
            const message = e instanceof Error ? e.message : String(e);
            throw new Error(`REQUEST_ERROR ${message}`);
        });
        return {
            result,
            abort: () => controller.abort(),
        };
    },
};
export { ofetchPhishingHttpClient };
