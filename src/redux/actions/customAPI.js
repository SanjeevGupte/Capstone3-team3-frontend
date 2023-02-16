import * as types from "./actionTypes";

export function getAgent(payload) {
    return { type: types.GETAGENT, payload };
}

