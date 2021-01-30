import React from "react"

import { IconButton } from "@material-ui/core"

import Layout from "../component/Area/layout"
import Header from "../component/Area/header"

import styled from "styled-components"

import SampleContainer from "../../reduxContainer/sampleContainer"

import icon_setting from "../../images/settings.png"

const Main = props => {
  const { number } = props

  console.log("redux setting test: ", number)

  return (
    <Layout>
      <Header
        title={"제목만 있는 상단 바"}
        rightComponent={
          <div>
            <SettingButton onClick={() => {}}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={icon_setting}
                alt={"설정 아이콘"}
              />
            </SettingButton>
          </div>
        }
      />
      메인 페이지, 컨텐츠 설정중입니다.
    </Layout>
  )
}

export default SampleContainer(Main)

const SettingButton = styled(IconButton)`
  margin: 0;
  padding: 0;
  border-radius: 25px;
`
