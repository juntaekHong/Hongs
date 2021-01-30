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
        <section
          style={{ position: "absolute", left: 10, top: 0, ...leftStyle }}
        >
          {leftComponent}
        </section>
      ) : null}

      <section
        style={{
          ...titleStyle,
        }}
      >
        {title}
      </section>

      {rightComponent ? (
        <section
          style={{ position: "absolute", right: 10, top: 0, ...rightStyle }}
        >
          {rightComponent}
        </section>
      ) : null}
    </div>
  )
}

export default Header
