import { Categories } from "./../../types/Categories.types";
import {
  GET_CATEGORIES_FETCH,
  categoriesSuccessAction,
} from "./../actions/categoriesActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";

function categoriesFetch() {
  return fetch("https://fakestoreapi.com/products/categories").then((response) =>
    response.json()
  );
}

function* workGetCategoriesFetch() {
  const categories: Categories = yield call(categoriesFetch);

  yield put(categoriesSuccessAction(categories));
}

function* categoriesSaga() {
  yield takeEvery(GET_CATEGORIES_FETCH, workGetCategoriesFetch);
}

export default categoriesSaga;
