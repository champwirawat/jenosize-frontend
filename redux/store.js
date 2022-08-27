import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];

const makeStore = () =>
  createStore(rootReducer, applyMiddleware(...middleware));

export const wrapper = createWrapper(makeStore);
