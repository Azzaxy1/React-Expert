import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./rootReducer";
import { thunk, todoDeletionCheck } from "./middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, todoDeletionCheck))
);

export { store };
