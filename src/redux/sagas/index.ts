import { all, fork } from "redux-saga/effects";
import categoriesSaga from "./categoriesSaga";
import productsSaga from "./productsSaga";

const sagas = function* () {
  yield all([fork(productsSaga), fork(categoriesSaga)]);
};

export default sagas;
