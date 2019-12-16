import { createStore } from "redux";
import editMenuReducer from "./editMenuReducer";

// const reducers = combineReducers({
//   app: editMenuReducer
// });

let store = createStore(editMenuReducer);

export default store;
