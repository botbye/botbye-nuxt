import { runChallenge, setUserId } from "@botbye/client";
import type { TInitChallengesOptions, TChallengesRunner, TGetTokenOptions } from "@botbye/client";
declare const initChallenges: (options: TInitChallengesOptions) => PromiseLike<TChallengesRunner>;
export { initChallenges, runChallenge, setUserId, type TInitChallengesOptions, type TChallengesRunner, type TGetTokenOptions, };
