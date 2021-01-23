import React from "react"

const Layout = props => {
  const { children } = props

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      {children}
    </div>
  )
}

export default Layout
