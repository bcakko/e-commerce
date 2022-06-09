import { all, fork } from "redux-saga/effects";
import filterCollectionSaga from "./filterCollectionSaga";
import collectionSaga from "./collectionSaga";
import detailSaga from "./detailSaga";
import userSaga from "./userSaga";

const sagas = function* () {
  yield all([fork(collectionSaga), fork(filterCollectionSaga), fork(detailSaga), fork(userSaga)]);
};

export default sagas;