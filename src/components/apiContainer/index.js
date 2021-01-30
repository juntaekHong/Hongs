import { combineReducers } from "redux"

import ConfigReducer from "./config"
import SampleReducer from "./sample"

export default combineReducers({
  ConfigReducer,

  // 다른 리듀서를 만들게되면 여기에 넣어줌..
  SampleReducer,
})
