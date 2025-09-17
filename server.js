import { getHeaders } from "h3";
const MODULE_NAME = "NodeJS-NuxtJS";
const MODULE_VERSION = "0.1.0";
let SERVER_KEY = "";
let API = "verify.botbye.com";
const initBotBye = ({ serverKey }) => {
    SERVER_KEY = serverKey;
};
const extractIp = (forwardedFor) => {
    const DEFAULT = "0.0.0.0";
    if (!forwardedFor) {
        return DEFAULT;
    }
    return forwardedFor.split(",")[0].trim() ?? DEFAULT;
};
const extractHeaders = (headers) => {
    return Object.entries(headers).reduce((acc, [key, value]) => {
        if (!value)
            return acc;
        if (acc[key]) {
            acc[key] += `; ${value}`;
        }
        else {
            acc[key] = value;
        }
        return acc;
    }, {});
};
const getNetworkErrorResponse = (message) => {
    return {
        reqId: '00000000-0000-0000-0000-000000000000',
        result: {
            isAllowed: true,
        },
        error: {
            message: "[BotBye] " + message,
        },
    };
};
const botByeRequest = ({ requestEvent, token, customFields }) => {
    if (!SERVER_KEY) {
        throw new Error("[BotBye!] Init should be called before validateRequest");
    }
    const reqHeader = getHeaders(requestEvent);
    const reqMethod = requestEvent.method;
    const reqAddress = requestEvent.path;
    const botByeUrlRequest = new URL(`https://${API}/validate-request/v2`);
    const params = new URLSearchParams(token);
    botByeUrlRequest.search = params.toString();
    const botByeHeaders = extractHeaders(reqHeader);
    const botByeRequestInfo = {
        'request_uri': reqAddress,
        'request_method': reqMethod,
        'remote_addr': extractIp(reqHeader["x-forwarded-for"]),
    };
    const botByeBody = JSON.stringify({
        server_key: SERVER_KEY,
        request_info: botByeRequestInfo,
        headers: botByeHeaders,
        custom_fields: customFields ?? {},
    });
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(getNetworkErrorResponse("Connection Timeout"));
        }, 300);
    });
    const botByeResponse = $fetch(botByeUrlRequest.toString(), {
        method: "POST",
        headers: {
            ['Module-Name']: MODULE_NAME,
            ['Module-Version']: MODULE_VERSION,
            Connection: 'keep-alive',
            ['content-type']: "application/json",
        }, body: botByeBody,
    });
    return Promise.race([timeoutPromise, botByeResponse]);
};
export { botByeRequest, initBotBye, };
