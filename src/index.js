import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { initialState, gameReducer } from "./reducers/gameReducer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

/* eslint-disable no-underscore-dangle */
const store = createStore(
  gameReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
