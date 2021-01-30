import { combineReducers } from "redux"

import SampleReducer from "./sample"

export default combineReducers({
  SampleReducer,
  // 다른 리듀서를 만들게되면 여기에 넣어줌..
})
