import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import cardsReducer from "./cards/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  cardsReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
