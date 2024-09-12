import { ActionType } from "../Constant/Constant.js";

export const HandleCart = (payload) => {
    return {
        type: ActionType.HandleCart,
        payload: payload
    };
};

export const RemoveCart = (payload) => {
    return {
        type: ActionType.RemoveCart,
        payload: payload
    };
};

export const EmptyCart = (payload) => {
    return {
        type: ActionType.EmptyCart,
        payload: payload
    };
};