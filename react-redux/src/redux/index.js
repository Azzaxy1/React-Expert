import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk, todoDeletionCheck } from "./middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, todoDeletionCheck)
);

export { store };
