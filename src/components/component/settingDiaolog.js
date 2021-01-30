import React, { useEffect } from "react"

import { Slide, Dialog, Switch } from "@material-ui/core"

import useDarkMode from "use-dark-mode"

const SettingDialog = props => {
  const { _windowWidth } = props
  const { open, onClose } = props

  const darkMode = useDarkMode(false)

  return (
    // <Slide direction="right">
    <Dialog open={open} onClose={onClose}>
      <Switch
        color={"primary"}
        checked={darkMode.value}
        onChange={() => {
          if (darkMode.value) {
            darkMode.disable()
          } else {
            darkMode.enable()
          }
        }}
      />
    </Dialog>
    // </Slide>
  )
}

export default SettingDialog
