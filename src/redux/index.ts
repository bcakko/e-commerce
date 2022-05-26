import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import categoriesReducer from "./reducers/categoriesReducer";

import productsReducer from "./reducers/productsReducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(sagas);

export default store;
