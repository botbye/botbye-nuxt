import { initChallenges as initChallengesBase, initPhishing as initPhishingBase, runChallenge, setUserId } from "@botbye/client";
import { WITH_INTERNAL } from "./constants.js";
const initChallenges = (options) => {
    return initChallengesBase({ ...options, ...WITH_INTERNAL });
};
const initPhishing = (options) => {
    return initPhishingBase({ ...options, ...WITH_INTERNAL });
};
export { initChallenges, initPhishing, runChallenge, setUserId, };
