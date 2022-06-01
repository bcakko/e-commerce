import { all, fork } from "redux-saga/effects";
import filterCollectionSaga from "./filterCollectionSaga";
import collectionSaga from "./collectionSaga";

const sagas = function* () {
  yield all([fork(collectionSaga), fork(filterCollectionSaga)]);
};

export default sagas;
