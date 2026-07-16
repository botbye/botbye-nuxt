import { moduleApiFactory } from "@botbye/node-core";
import { ofetchHttpClient } from "./http-client.js";
import { MODULE_NAME, MODULE_VERSION } from "./constants.js";
import { requestInfoExtractor } from "./utils.js";
const factory = () => moduleApiFactory({
    httpClient: ofetchHttpClient,
    module: {
        name: MODULE_NAME,
        version: MODULE_VERSION,
    },
    requestInfoExtractor,
});
const { init, evaluate, dev } = factory();
export { init, evaluate, dev, factory, };
export { phishing, phishingFactory, } from "./phishing.js";
