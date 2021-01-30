// import api from "../../utils/api"

import { createAction, handleActions } from "redux-actions"

// 액션함수
const NUMBER_INCREMENT = "@Hongs/sample/NUMBER_INCREMENT"
const NUMBER_DECREMENT = "@Hongs/sample/NUMBER_DECREMENT"

export const incrementNumber = createAction(NUMBER_INCREMENT)
export const decrementNumber = createAction(NUMBER_DECREMENT)

// redux-state
const initState = {
  number: 0,
}

// api 호출 및 dispatch 부분
export const requestPlus = param => async dispatch => {
  //   const result = await api.post(`${apiURL}/signin`, {
  //     body: param,
  //   })

  await dispatch(incrementNumber())

  return true
}

export const requestMinus = param => async dispatch => {
  //   const result = await api.post(`${apiURL}/signin`, {
  //     body: param,
  //   })

  await dispatch(decrementNumber())

  return true
}

// 액션함수 핸들러 부분
export default handleActions(
  {
    [NUMBER_INCREMENT]: (state, action) => ({
      ...state,
      number: state.number + 1,
    }),
    [NUMBER_DECREMENT]: (state, action) => ({
      ...state,
      number: state.number - 1,
    }),
  },
  initState
)