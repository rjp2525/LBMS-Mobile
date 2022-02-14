import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import thunk from "redux-thunk";

import reducers from "../redux/reducers";
import sagas from "../redux/sagas";

// Middleware to log actions
const loggerMiddleware = createLogger({ predicate: () => __DEV__ });

// Create the Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(loggerMiddleware, thunk, sagaMiddleware)
);

// Run Saga
sagaMiddleware.run(sagas);

export default store;
