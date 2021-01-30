import React from "react"
import { Provider } from "react-redux"

import SEO from "./src/components/seo"

import { createStore, applyMiddleware } from "redux"

import reducers from "./src/components/apiContainer"

import { createLogger } from "redux-logger"
import ReduxThunk from "redux-thunk"
import penderMiddleware from "redux-pender"

const logger = createLogger()

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore(
    reducers,
    applyMiddleware(logger, ReduxThunk, penderMiddleware())
  )

  return (
    <>
      <SEO title={"Hongs"} />
      <Provider store={store}>{element}</Provider>
    </>
  )
}
