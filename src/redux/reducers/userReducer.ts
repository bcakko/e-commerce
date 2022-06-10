import { UserState } from "../../types/States.types";
import { AnyAction } from "redux";
import { LOG_USER_IN, LOG_USER_IN_SUCCESS ,LOG_USER_OUT } from "../actions/userActions";

const initialState: UserState = {
    isLoggedIn: false,
    user: {
        token: "",
        id: "",
        username: ""
    }
}

const userReducer = (
    state = initialState,
    action: AnyAction
): UserState => {
    switch (action.type) {
        case LOG_USER_IN_SUCCESS:
            return {
                ...state, isLoggedIn: true, user: action.payload.user
            }
        case LOG_USER_OUT:
            return {
                ...state, isLoggedIn: false, user: {
                    token: "",
                    id: "",
                    username: ""
                }
            }
        default:
            return state;
    }
}

export default userReducer;