import { ShowNotifierAction, HideNotifierAction } from "../../types/Actions.types";
export const SHOW_NOTIFIER = "SHOW_NOTIFIER";
export const HIDE_NOTIFIER = "HIDE_NOTIFIER";

export const showNotifier = (message: string) : ShowNotifierAction => {
    return {
        type: SHOW_NOTIFIER,
        payload: {
            message: message
        }
    }
}

export const hideNotifier = () : HideNotifierAction => {
    return {
        type: HIDE_NOTIFIER,
        payload: {
            message: ""
        }
    }
}