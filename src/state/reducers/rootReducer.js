import { combineReducers } from "redux";

import tvShowDetail from "./tvShowDetailReducer";
import tvShowList from "./tvShowListReducer";

export default combineReducers({
  tvShowDetail,
  tvShowList
});
