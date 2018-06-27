import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux"
import { Provider } from "react-redux";

import Hello from "./components/Hello";
import App from "./components/App";

const reducer = (state = 0, action) => {
    if (action.type === "ADD") {
        return state + action.payload;
    } else if (action.type === "SUB") {
        return state - action.payload;
    } else {
        return state
    }
}
const store = createStore(reducer);

store.subscribe(() => console.log("Store: " + store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main")
);