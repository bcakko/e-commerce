import { FilterParamType } from "../actions/filterCollectionActions";
import {
  FILTER_COLLECTION_FETCH,
  filterCollectionSuccessAction,
} from "../actions/filterCollectionActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { FilterCollectionFetchAction } from "../../types/Actions.types";

function filterCollectionFetch(inputText: string) {
  console.log(inputText)
  return fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=b5bddaa20e713df498a5886ee5424e6e&query=${inputText}`
  ).then((response) => response.json());
}

function* workFilterCollectionFetch(action: FilterCollectionFetchAction) {
  const collection: FilterParamType = yield call(
    filterCollectionFetch,
    action.payload.inputText
  );

  yield put(filterCollectionSuccessAction(collection));
}

function* filterCollectionSaga() {
  yield takeEvery(FILTER_COLLECTION_FETCH, workFilterCollectionFetch);
}

export default filterCollectionSaga;
