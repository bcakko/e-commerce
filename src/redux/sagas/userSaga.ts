import { User } from './../../types/UserType';
import axios from 'axios';
import { LogUserInAction } from './../../types/Actions.types';
import { logUserInSuccessAction, LOG_USER_IN } from './../actions/userActions';

import { call, put, takeEvery } from "@redux-saga/core/effects";

async function logUserIn(id:string){
    try{
        const response = await axios.get(`http://localhost:4000/api/getOne/${id}`);
        return response.data;
    } catch (error){
        console.log(error)
    }

}

function* workLogUserIn(action: LogUserInAction) {
    const user: User = yield call(
        logUserIn,
        action.payload.id
    );
    yield put(logUserInSuccessAction(user));
}

function* userSaga(){
    yield takeEvery(LOG_USER_IN, workLogUserIn);
}

export default userSaga;