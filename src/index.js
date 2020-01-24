import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./StoreContext";
import store from "./redux/store";

let renderTree = () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("root")
    );
  },
  state = store.getState();

renderTree(state);

store.subscribe(() => {
  renderTree(state);
});

serviceWorker.unregister();
