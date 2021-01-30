import React from "react"
import useDarkMode from "use-dark-mode"

import { Switch } from "@material-ui/core"

const DarkModeButton = () => {
  const darkMode = useDarkMode(false)

  return (
    <Switch
      color={"primary"}
      value={!darkMode.value}
      onChange={() => (darkMode.value ? darkMode.disable() : darkMode.enable())}
    />
  )
}

export default DarkModeButton
