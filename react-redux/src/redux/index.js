import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { todoDeletionCheck } from "./middleware";

const store = createStore(rootReducer, applyMiddleware(todoDeletionCheck));

export { store };
