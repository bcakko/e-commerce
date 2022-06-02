import {
  collectionSuccessAction,
  GET_COLLECTION_FETCH,
} from "../actions/collectionActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { Movies } from "../../types/Movies.types";
import { Shows } from "../../types/Shows.types";
import { CollectionFetchAction } from "../../types/Actions.types";

function collectionFetch(mainCategory: string, subCategory: string | null) {
  return fetch(
    `https://api.themoviedb.org/3/${mainCategory}/${subCategory}?api_key=b5bddaa20e713df498a5886ee5424e6e&language=en-US&page=1`
  ).then((response) => response.json());
}

// WORKERS

function* workGetCollectionFetch(action: CollectionFetchAction) {
  const collection: Movies | Shows = yield call(
    collectionFetch,
    action.payload.mainCategory,
    action.payload.subCategory
  );
  yield put(collectionSuccessAction(collection));
}

// SAGAS

function* collectionSaga() {
  yield takeEvery(GET_COLLECTION_FETCH, workGetCollectionFetch);
}

export default collectionSaga;
