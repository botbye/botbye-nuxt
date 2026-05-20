import { moduleApiFactory } from "@botbye/node-core";
import { ofetchHttpClient } from "./http-client.js";
import { getRequestHeaders, getRequestIP } from "h3";
import { MODULE_NAME, MODULE_VERSION } from "./constants.js";
const factory = () => moduleApiFactory({
    httpClient: ofetchHttpClient,
    module: {
        name: MODULE_NAME,
        version: MODULE_VERSION,
    },
    requestInfoExtractor: (event, global) => {
        try {
            const rawHeaders = getRequestHeaders(event);
            const headers = {};
            for (const [key, value] of Object.entries(rawHeaders)) {
                if (value !== undefined) {
                    headers[key] = value;
                }
            }
            return {
                ip: getRequestIP(event, { xForwardedFor: true }) ?? "0.0.0.0",
                requestUri: event.path,
                requestMethod: event.method,
                headers,
            };
        }
        catch {
            global.logger.warn("Not valid type of request passed. event.request.request should be an instance of H3Event. Fallback value will be used");
            return {
                ip: "0.0.0.0",
                headers: {},
            };
        }
    },
});
const { init, evaluate, dev } = factory();
export { init, evaluate, dev, factory, };
