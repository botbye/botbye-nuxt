import { initChallenges as initChallengesBase, runChallenge, setUserId } from "@botbye/client";
import { WITH_INTERNAL } from "./constants.js";
const initChallenges = (options) => {
    return initChallengesBase({ ...options, ...WITH_INTERNAL });
};
export { initChallenges, runChallenge, setUserId, };
