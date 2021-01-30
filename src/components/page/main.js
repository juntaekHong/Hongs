import React, { useState } from "react"

import { IconButton } from "@material-ui/core"

import Layout from "../component/Area/layout"
import Header from "../component/Area/header"

import styled from "styled-components"

import SampleContainer from "../../reduxContainer/sampleContainer"

import SettingsIcon from "@material-ui/icons/Settings"
import SettingDialog from "../component/settingDiaolog"

const Main = props => {
  const { _windowWidth } = props

  const [settingPopup, setSettingPopup] = useState(false)

  return (
    <Layout>
      <SettingDialog
        _windowWidth={_windowWidth}
        open={settingPopup}
        onClose={() => setSettingPopup(false)}
      />
      <Header
        title={"설계 구조 작업중"}
        rightComponent={
          <SettingButton onClick={() => setSettingPopup(true)}>
            <SettingsIcon />
          </SettingButton>
        }
      />
      메인 페이지, 컨텐츠 설정중입니다.
    </Layout>
  )
}

export default SampleContainer(Main)

const SettingButton = styled(IconButton)`
  z-index: 100;
  margin: 0;
  padding: 0;
  border-radius: 15px;
  width: 30px;
  height: 30px;
`
