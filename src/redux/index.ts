import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import collectionReducer from "./reducers/collectionReducer";
import detailReducer from "./reducers/detailReducer";
import filterCollectionReducer from "./reducers/filterCollectionReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    collection: collectionReducer,
    filterCollection: filterCollectionReducer,
    detail: detailReducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
