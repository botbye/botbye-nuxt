import type { TBotByeInitOptions, TBotByeResponse } from "botbye-node-core";
import { IBotByeRequest } from "./types";
declare const initBotBye: ({ serverKey }: TBotByeInitOptions) => void;
declare const botByeRequest: ({ requestEvent, token, customFields }: IBotByeRequest) => Promise<TBotByeResponse>;
export { botByeRequest, initBotBye, };
