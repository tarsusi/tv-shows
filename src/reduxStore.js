import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import rootReducer from "state/reducers/rootReducer";

export default function configureStore() {
  return createStore(rootReducer, {}, applyMiddleware(promise));
}
