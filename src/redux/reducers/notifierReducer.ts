import { AnyAction } from 'redux';
import { NotifierState } from '../../types/States.types';
import { SHOW_NOTIFIER, HIDE_NOTIFIER } from '../actions/notifierActions';
const initialState: NotifierState = {
    isShown: false,
    message: ""
}

const notifierReducer = (
    state = initialState,
    action: AnyAction
): NotifierState => {
    switch (action.type) {
        case SHOW_NOTIFIER:
            return {...state, isShown: true, message: action.payload.message };
        case HIDE_NOTIFIER:
            return {...state, isShown: false};
        default:
            return state;
    }
}

export default notifierReducer;