import React, { useEffect, useState } from "react"

import { Slide, Dialog, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styled from "styled-components"

import useDarkMode from "use-dark-mode"

import ConfigContainer from "../../../reduxContainer/configContainer"

const useStyles = makeStyles(theme => ({
  container: {
    "& .MuiPaper-root": {
      position: "absolute",
      top: 0,
      left: 0,
    },
    "& .MuiDialog-paper": {
      margin: 0,
      minHeight: "100%",
      borderRadius: "0px 20px 20px 0px",
    },
  },
}))

const Transition = React.forwardRef((props, ref) => (
  <Slide direction={"right"} {...props} ref={ref} />
))

const MenuDialog = props => {
  const classes = useStyles()

  const { _menuList, setMenu } = props
  const { open, onClose } = props

  const darkMode = useDarkMode(false)

  const [changeMode, setChangeMode] = useState(false)
  const [tempMenuList, setTempMenuList] = useState([])

  useEffect(() => {
    setTempMenuList(_menuList)
  }, [_menuList])

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
        <div style={{ paddingLeft: "60px" }}>
          <CutomTextButton
            isDark={darkMode.value}
            text={`순서변경 ${changeMode ? "OFF" : "ON"}`}
            onClick={() => setChangeMode(!changeMode)}
          />
        </div>

        {/* 순서변경 모드 X */}
        {!changeMode
          ? tempMenuList.map((i, idx) => (
              <div key={idx}>
                <CutomTextButton
                  isDark={darkMode.value}
                  text={i.title}
                  onClick={() => {}}
                />
              </div>
            ))
          : null}

        {/* 메뉴 순서 변경 모드 */}
        {changeMode ? <div></div> : null}
      </div>
    </Dialog>
  )
}

export default ConfigContainer(MenuDialog)

const CutomTextButton = props => {
  const { text, isDark, onClick } = props

  return (
    <Button style={{ padding: 10, margin: 0 }} onClick={onClick}>
      <span className={isDark ? "dark-mode" : "light-mode"}>{text}</span>
    </Button>
  )
}
