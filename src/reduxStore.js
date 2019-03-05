import { createStore } from "redux";
import rootReducer from "state/reducers/rootReducer";

export default function configureStore() {
  return createStore(rootReducer, {});
}
