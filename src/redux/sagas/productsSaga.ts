import {
  filteredSuccessAction,
  GET_FILTERED_FETCH,
  GET_PRODUCTS_FETCH,
  productsSuccessAction,
} from "./../actions/productsActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { FilteredFetchAction, Products } from "../../types/Products.types";

function productsFetch() {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
}

function filteredFetch(category: string) {
  return fetch(`https://fakestoreapi.com/products/category/${category}`).then(
    (response) => response.json()
  );
}

// WORKERS

function* workGetProductsFetch() {
  const products: Products[] = yield call(productsFetch);
  yield put(productsSuccessAction(products));
}

function* workGetFilteredFetch(action: FilteredFetchAction) {
  const filteredProducts: Products[] = yield call(
    filteredFetch,
    action.payload.category
  );
  yield put(filteredSuccessAction(filteredProducts));
}

// SAGAS

function* productsSaga() {
  yield takeEvery(GET_PRODUCTS_FETCH, workGetProductsFetch);
  yield takeEvery(GET_FILTERED_FETCH, workGetFilteredFetch);
}

export default productsSaga;
