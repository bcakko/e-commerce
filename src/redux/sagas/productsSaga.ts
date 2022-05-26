import { AnyAction } from "redux";
import {
  GET_FILTERED_FETCH,
  GET_FILTERED_SUCCESS,
  GET_PRODUCTS_FETCH,
} from "./../actions/productsActions";
import { call, put, takeEvery } from "@redux-saga/core/effects";
import { GET_PRODUCTS_SUCCESS } from "../actions/productsActions";

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

function* workGetProductsFetch(): any {
  const products = yield call(productsFetch);
  yield put({
    type: GET_PRODUCTS_SUCCESS,
    payload: { products },
  });
}

function* workGetFilteredFetch(action: AnyAction): any {
  const filteredProducts = yield call(filteredFetch, action.payload.category);
  yield put({
    type: GET_FILTERED_SUCCESS,
    payload: { filteredProducts },
  });
}

// SAGAS

function* productsSaga() {
  yield takeEvery(GET_PRODUCTS_FETCH, workGetProductsFetch);
  yield takeEvery(GET_FILTERED_FETCH, workGetFilteredFetch);
}

export default productsSaga;
