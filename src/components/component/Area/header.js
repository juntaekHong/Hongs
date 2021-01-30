import React from "react"

const Header = props => {
  const { leftStyle, titleStyle, rightStyle } = props
  const { title, leftComponent, rightComponent } = props

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "60px",
      }}
    >
      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          ...leftStyle,
        }}
      >
        {leftComponent}
      </section>

      <section
        style={{
          flex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...titleStyle,
        }}
      >
        {title}
      </section>

      <section
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          ...rightStyle,
        }}
      >
        {rightComponent}
      </section>
    </div>
  )
}

export default Header
