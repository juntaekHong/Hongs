import React, { useState } from "react"

import { IconButton } from "@material-ui/core"

import Layout from "../component/Area/layout"
import Header from "../component/Area/header"
import MenuDialog from "../component/menuDialog"
import SettingDialog from "../component/settingDiaolog"

import styled from "styled-components"

import SampleContainer from "../../reduxContainer/sampleContainer"

import SettingsIcon from "@material-ui/icons/Settings"
import SettingsApplicationsSharpIcon from "@material-ui/icons/SettingsApplicationsSharp"
import MenuIcon from "@material-ui/icons/Menu"

import useDarkMode from "use-dark-mode"

const Main = props => {
  const { _windowWidth } = props

  const darkMode = useDarkMode(false)

  const [settingPopup, setSettingPopup] = useState(false)
  const [menuPopup, setMenuPopup] = useState(false)

  return (
    <Layout>
      {/* 메뉴 다이아로그 */}
      <MenuDialog open={menuPopup} onClose={() => setMenuPopup(false)} />
      {/* 설정 다이아로그 */}
      <SettingDialog
        open={settingPopup}
        onClose={() => setSettingPopup(false)}
      />
      <Header
        title={"설계 구조 작업중"}
        leftComponent={
          <CustomIconButton dark={darkMode} onClick={() => setMenuPopup(true)}>
            <MenuIcon />
          </CustomIconButton>
        }
        rightComponent={
          <CustomIconButton
            dark={darkMode}
            onClick={() => setSettingPopup(true)}
          >
            <SettingsIcon />
          </CustomIconButton>
        }
      />
      메인 페이지, 컨텐츠 설정중입니다.
    </Layout>
  )
}

export default SampleContainer(Main)

const CustomIconButton = styled(IconButton)`
  z-index: 100;
  margin: 0;
  padding: 0;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  background-color: ${props => (props.dark.value ? "#999" : "transparent")};
`
