import { initPhishing as initPhishingBase, runChallenge, setUserId } from "@botbye/client";
import type { TInitChallengesOptions, TChallengesRunner, TGetTokenOptions } from "@botbye/client";
type TPhishingInitOptions = Parameters<typeof initPhishingBase>[0];
type TPhishingApi = Awaited<ReturnType<typeof initPhishingBase>>;
declare const initChallenges: (options: TInitChallengesOptions) => PromiseLike<TChallengesRunner>;
declare const initPhishing: (options: TPhishingInitOptions) => PromiseLike<{
    getCatcher: (options?: {
        url?: string;
        id?: string;
        type?: "PNG" | "OBJECT";
        skipExecution?: boolean;
        innerUrl?: string;
    }) => HTMLElement;
}>;
export { initChallenges, initPhishing, runChallenge, setUserId, type TInitChallengesOptions, type TChallengesRunner, type TGetTokenOptions, type TPhishingInitOptions, type TPhishingApi, };
