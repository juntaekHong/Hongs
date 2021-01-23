import React from "react"

const Header = props => {
  const { leftStyle, titleStyle, rightStyle } = props

  const { title, leftComponent, rightComponent } = props

  return (
    <div
      style={{
        position: "relative",

        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {leftComponent ? (
        <div style={{ position: "absolute", left: 10, top: 0, ...leftStyle }}>
          {leftComponent}
        </div>
      ) : null}

      <div
        style={{
          ...titleStyle,
        }}
      >
        {title}
      </div>

      {rightComponent ? (
        <div style={{ position: "absolute", right: 10, top: 0, ...rightStyle }}>
          {rightComponent}
        </div>
      ) : null}
    </div>
  )
}

export default Header
