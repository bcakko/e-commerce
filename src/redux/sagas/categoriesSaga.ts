import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FETCH,
} from "./../actions/categoriesActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";

function categoriesFetch() {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
}

function* workGetCategoriesFetch(): any {
  const categories = yield call(categoriesFetch);
  yield put({
    type: GET_CATEGORIES_SUCCESS,
    payload: { categories },
  });
}

function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES_FETCH, workGetCategoriesFetch);
}

export default categoriesSaga;
