// import api from "../../utils/api"

import { createAction, handleActions } from "redux-actions"

// 액션함수
const SET_WIDTH = "@Hongs/config/SET_WIDTH"
const SET_MENU_LIST = "@Hongs/config/SET_MENU_LIST"

const setInnrWidth = createAction(SET_WIDTH)
const setMenuList = createAction(SET_MENU_LIST)

// redux-state
const initState = {
  _windowWidth: 0,

  _menuList: [
    { seq: 1, title: "메뉴1" },
    { seq: 2, title: "메뉴2" },
    { seq: 3, title: "메뉴3" },
    { seq: 4, title: "메뉴4" },
    { seq: 5, title: "메뉴5" },
  ],
}

// api 호출 및 dispatch 부분
export const setWidth = param => async dispatch => {
  await dispatch(setInnrWidth(param))

  return true
}
export const setMenu = param => async dispatch => {
  await dispatch(setMenuList(param))

  return true
}

// 액션함수 핸들러 부분
export default handleActions(
  {
    [SET_WIDTH]: (state, action) => ({
      ...state,
      _windowWidth: action.payload,
    }),
    [SET_MENU_LIST]: (state, action) => ({
      ...state,
      _menuList: action.payload,
    }),
  },
  initState
)
