import { ActionType } from "../Constant/Constant.js";

const initialState = {
    cart: []
}

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.HandleCart:
            return {
                ...state,
                cart: payload
            }
        case ActionType.RemoveCart:
            return {
                ...state,
                cart: payload
            }
        case ActionType.EmptyCart:
            return {
                ...state,
                cart: payload
            }
        default:
            return state
    }
}