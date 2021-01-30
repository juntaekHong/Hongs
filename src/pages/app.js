import React, { useEffect } from "react"
import { Router } from "@reach/router"

import DefaultRoot from "../components/page/defualtRoot"
import Main from "../components/page/main"
import Page404 from "./404"

import ConfigContainer from "../reduxContainer/configContainer"

const App = props => {
  const { setWidth } = props

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      style={{
        width: "100%",
        height: "100%",

        backgroundColor: "#fff",
      }}
    >
      <Router
        basepath="/app"
        style={
          {
            // backgroundColor: "#000",
            // maxWidth: "500px",
            // height: "100%",
            // margin: "0 auto",
          }
        }
      >
        <DefaultRoot path="/" />
        <Main path="/main" />

        {/* 설정 이외의 경로로 들어갈 경우 404 페이지 띄움 */}
        <Page404 path="/*" />
      </Router>
    </div>
  )
}

export default ConfigContainer(App)
