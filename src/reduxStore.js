import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import rootReducer from "state/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(promise))
  );
}
