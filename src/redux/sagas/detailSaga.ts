import { Movie } from './../../types/Movies.types';
import { Show } from './../../types/Shows.types';
import { Person } from './../../types/People.types';
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { DetailFetchAction } from '../../types/Actions.types';
import { detailSuccessAction, GET_DETAIL_FETCH } from './../actions/detailActions';

function detailFetch(id: string, path: string) {
    return fetch(
        `https://api.themoviedb.org/3/${path}/${id}?api_key=b5bddaa20e713df498a5886ee5424e6e`
    ).then(response => response.json())
}

function* workDetailFetch(action: DetailFetchAction) {
    const detail: Movie | Show | Person = yield call(detailFetch, action.payload.id, action.payload.path);

    yield put(detailSuccessAction(detail))
}

function* detailSaga(){
    yield takeEvery(GET_DETAIL_FETCH, workDetailFetch);
}

export default detailSaga;
