import React from "react"

// 페이지의 최상단 layout에 StylesProvider에 StylesProvider를 적용하여 material-ui에도 styled-components를 사용할 수 있도록 해줌.
import { StylesProvider } from "@material-ui/core"

const Layout = props => {
  const { children } = props

  return (
    <div>
      <StylesProvider injectFirst>{children}</StylesProvider>
    </div>
  )
}

export default Layout
