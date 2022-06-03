import { GET_DETAIL_FETCH, GET_DETAIL_SUCCESS, detailFetchAction, detailSuccessAction } from './../actions/detailActions';
import { FilterParamType } from "../actions/filterCollectionActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { DetailFetchAction } from '../../types/Actions.types';

function detailFetch(id: string) {
    return fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=b5bddaa20e713df498a5886ee5424e6e&query=${id}`
    ).then(response => response.json())
}

function* workDetailFetch(action: DetailFetchAction) {
    const collection: FilterParamType = yield call(detailFetch, action.payload.id);

    yield put(detailSuccessAction(collection))
}

function* detailSaga(){
    yield takeEvery(GET_DETAIL_FETCH, workDetailFetch);
}

export default detailSaga;
