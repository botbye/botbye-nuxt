import { EventHandlerRequest, H3Event } from "h3";
export interface IBotByeRequest {
    requestEvent: H3Event<EventHandlerRequest>;
    token: string;
    customFields?: Record<string, string>;
}
