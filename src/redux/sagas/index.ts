import { all, fork } from "redux-saga/effects";
import filterCollectionSaga from "./filterCollectionSaga";
import collectionSaga from "./collectionSaga";
import detailSaga from "./detailSaga";

const sagas = function* () {
  yield all([fork(collectionSaga), fork(filterCollectionSaga), fork(detailSaga)]);
};

export default sagas;