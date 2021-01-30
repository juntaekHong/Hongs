import React, { useEffect } from "react"

import { Slide, Dialog, Switch } from "@material-ui/core"

import useDarkMode from "use-dark-mode"

const Transition = React.forwardRef((props, ref) => (
  <Slide direction={"left"} {...props} ref={ref} />
))

const SettingDialog = props => {
  const { _windowWidth } = props
  const { open, onClose } = props

  const darkMode = useDarkMode(false)

  return (
    <Dialog
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
      fullWidth={true}
    >
      <Switch
        color={"primary"}
        checked={darkMode.value}
        onChange={() => {
          darkMode.value ? darkMode.disable() : darkMode.enable()
        }}
      />
    </Dialog>
  )
}

export default SettingDialog
