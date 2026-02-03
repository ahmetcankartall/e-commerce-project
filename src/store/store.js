/*import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'
import logger from "redux-logger";

import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/ProductReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";


const rootReducer = combineReducers({
  client: clientReducer,
  product:productReducer,
  shop:shoppingCartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk,logger))
*/

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import clientReducer from "./reducers/clientReducer";
import productReducer from "./reducers/ProductReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

const rootReducer = combineReducers({
  client: clientReducer,
  product: productReducer,
  shop: shoppingCartReducer,
});

// 🔥 KRİTİK SATIR
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)
  )
);
