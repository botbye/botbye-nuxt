import { type TPhishingModuleApi } from "@botbye/node-core";
import { type H3Event } from "h3";
declare const phishingFactory: () => TPhishingModuleApi<H3Event>;
declare const phishing: TPhishingModuleApi<H3Event<import("h3").EventHandlerRequest>>;
export { phishing, phishingFactory, };
