import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import addSubtractReducer from "./reducers/addSutractReducer";

const middleware = applyMiddleware(logger);

export const store = createStore(addSubtractReducer, middleware);
