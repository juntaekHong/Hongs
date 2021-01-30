import React from "react"

import { Slide, Dialog } from "@material-ui/core"
import DarkModeButton from "./darkModeButton"

const SettingDialog = props => {
  const { _windowWidth } = props
  const { open, onClose } = props

  return (
    // <Slide direction="right">
    <Dialog open={open} onClose={onClose}>
      <DarkModeButton />
    </Dialog>
    // </Slide>
  )
}

export default SettingDialog
