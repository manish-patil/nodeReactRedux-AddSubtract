import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import addSubtractReducer from "./reducers/addSutractReducer";

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(addSubtractReducer, middleware);
