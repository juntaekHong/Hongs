// import api from "../../utils/api"

import { createAction, handleActions } from "redux-actions"

// 액션함수
const SET_WIDTH = "@Hongs/config/SET_WIDTH"

const setInnrWidth = createAction(SET_WIDTH)

// redux-state
const initState = {
  _windowWidth: 0,
}

// api 호출 및 dispatch 부분
export const setWidth = param => async dispatch => {
  //   const result = await api.post(`${apiURL}/signin`, {
  //     body: param,
  //   })

  await dispatch(setInnrWidth(param))

  return true
}

// 액션함수 핸들러 부분
export default handleActions(
  {
    [SET_WIDTH]: (state, action) => ({
      ...state,
      _windowWidth: action.payload,
    }),
  },
  initState
)
