import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import logger from "redux-logger";

import clientReducer from "./reducers/clientReducer";

const rootReducer = combineReducers({
  client: clientReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger,thunk))
