import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import { createBrowserHistory } from "history";
import rootReducer from "./reducers";

// export const history = createBrowserHistory();

const initialState = {};

let enhancers = [thunk, createLogger()];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...enhancers)
);
