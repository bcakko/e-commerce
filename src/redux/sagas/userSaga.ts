import { LogUserInAction } from './../../types/Actions.types';
import { logUserInAction, LOG_USER_IN } from './../actions/userActions';

import { call, put, takeEvery } from "@redux-saga/core/effects";

import { User } from '../../types/UserType';

function logUserIn(user:User){
    console.log(user)
    const userData = user;
    return userData;
}

function* workLogUserIn(action: LogUserInAction) {
    const user: User = yield call(
        logUserIn,
        action.payload.user
    );
    yield put(logUserInAction(user));
}

function* userSaga(){
    yield takeEvery(LOG_USER_IN, workLogUserIn);
}

export default userSaga;