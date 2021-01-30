import React, { useEffect } from "react"

import { Slide, Dialog, Switch } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import useDarkMode from "use-dark-mode"

const useStyles = makeStyles(theme => ({
  container: {
    "& .MuiPaper-root": {
      position: "absolute",
      top: 0,
      right: 0,
    },
    "& .MuiDialog-paper": {
      margin: 0,
      minHeight: "100%",
      borderRadius: "20px 0px 0px 20px",
    },
  },
}))

const Transition = React.forwardRef((props, ref) => (
  <Slide direction={"left"} {...props} ref={ref} />
))

const SettingDialog = props => {
  const classes = useStyles()

  const { open, onClose } = props

  const darkMode = useDarkMode(false)

  return (
    <Dialog
      className={classes.container}
      TransitionComponent={Transition}
      open={open}
      onClose={onClose}
    >
      <div
        className={darkMode.value ? "dark-mode" : "light-mode"}
        style={{
          flex: 1,
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: "10px" }}>다크모드</span>
          <Switch
            color={"primary"}
            checked={darkMode.value}
            onChange={() => {
              darkMode.value ? darkMode.disable() : darkMode.enable()
            }}
          />
        </div>
      </div>
    </Dialog>
  )
}

export default SettingDialog
