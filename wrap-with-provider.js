import React from "react"
import { Provider } from "react-redux"

import SEO from "./src/components/seo"

import { createStore, applyMiddleware } from "redux"

import reducers from "./src/components/apiContainer"

import { createLogger } from "redux-logger"
import ReduxThunk from "redux-thunk"
import penderMiddleware from "redux-pender"

// 리덕스 유지 시켜줌.
import { persistReducer } from "redux-persist"
import storageSession from "redux-persist/lib/storage/session" // => sessionStorage에 redux state 저장
// import storage from "redux-persist/lib/storage" => localstorage에 redux state 저장
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

const logger = createLogger()

// 유지 설정 셋팅
const persistConfig = {
  key: "root",
  // sessionStorage 저장합니다. => localStorage에 저장되면, 사용자가 직접 쿠키를 삭제하기 전까지 데이터가 남아있어 버전별 데이터 컨트롤이 어려움.
  storage: storageSession,
  // 저장소에 저장할(유지할 리덕스 state) 리스트
  // whitelist: [],
  // blacklist -> 그것만 제외합니다
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const persistReducers = persistReducer(persistConfig, reducers)

  const store = createStore(
    persistReducers,
    applyMiddleware(logger, ReduxThunk, penderMiddleware())
  )

  const persistor = persistStore(store)

  return (
    <>
      <SEO title={"Hongs"} />

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {element}
        </PersistGate>
      </Provider>
    </>
  )
}
