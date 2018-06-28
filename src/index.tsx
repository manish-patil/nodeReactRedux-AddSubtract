import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

// import Hello from "./components/Hello";
import App from "./components/App";
import { store } from "./store";

store.subscribe(() => console.log("Store: changed: ", store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("main")
);