import { phishingModuleApiFactory, } from "@botbye/node-core";
import { ofetchPhishingHttpClient } from "./phishing-http-client.js";
import { MODULE_NAME, MODULE_VERSION } from "./constants.js";
import { requestInfoExtractor } from "./utils.js";
const phishingFactory = () => phishingModuleApiFactory({
    httpClient: ofetchPhishingHttpClient,
    module: {
        name: MODULE_NAME,
        version: MODULE_VERSION,
    },
    catcherRequestInfoExtractor: requestInfoExtractor,
});
const phishing = phishingFactory();
export { phishing, phishingFactory, };
