import { LogUserInAction, LogUserOutAction} from './../../types/Actions.types';
import { User } from '../../types/UserType';

export const LOG_USER_IN = "LOG_USER_IN";
export const LOG_USER_OUT = "LOG_USER_OUT";

export const logUserInAction = (
    param: User
) : LogUserInAction => {
    return {
        type: LOG_USER_IN,
        payload: {
            user: param
        }
    }
}

export const logUserOutAction = () : LogUserOutAction => {
    return { type: LOG_USER_OUT }
}
