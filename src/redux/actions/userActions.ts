import { User } from './../../types/UserType';
import { LogUserInAction, LogUserInSuccessAction, LogUserOutAction} from './../../types/Actions.types';

export const LOG_USER_IN = "LOG_USER_IN";
export const LOG_USER_IN_SUCCESS = "LOG_USER_IN_SUCCESS";
export const LOG_USER_OUT = "LOG_USER_OUT";

export const logUserInAction = (
    _id: string
) : LogUserInAction => {
    return {
        type: LOG_USER_IN,
        payload: {
            id: _id
        }
    }
}

export const logUserInSuccessAction = (
    param: User
): LogUserInSuccessAction => {
    return {
        type: LOG_USER_IN_SUCCESS,
        payload: {
            user: param
        }
    }
}

export const logUserOutAction = () : LogUserOutAction => {
    return { type: LOG_USER_OUT }
}
