import React from "react"

import { IconButton } from "@material-ui/core"

import Layout from "../component/Area/layout"
import Header from "../component/Area/header"

import styled from "styled-components"

import icon_setting from "../../images/settings.png"

const Main = props => {
  return (
    <Layout>
      <Header
        title={"제목만 있는 상단 바"}
        rightComponent={
          <div>
            <SettingButton>
              <img
                style={{ width: "50px", height: "50px" }}
                src={icon_setting}
              />
            </SettingButton>
          </div>
        }
      />
      메인 페이지, 컨텐츠 설정중입니다.
    </Layout>
  )
}

const SettingButton = styled(IconButton)`
  margin: 0;
  padding: 0;
  border-radius: 25px;
`

export default Main
