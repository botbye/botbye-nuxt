import { getRequestHeaders, getRequestIP } from "h3";
const requestInfoExtractor = (event, global) => {
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
};
export { requestInfoExtractor, };
