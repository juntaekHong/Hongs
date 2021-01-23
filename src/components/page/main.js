import React from "react"

import Layout from "../component/Area/layout"
import Header from "../component/Area/header"

const Main = props => {
  return (
    <Layout>
      <Header title={"제목만 있는 상단 바"} />
      <Header
        title={"제목 + 오른쪽 컴포넌트 상단 바"}
        rightComponent={<div>오른쪽</div>}
      />
      <Header
        title={"제목 + 왼쪽 컴포넌트 상단 바"}
        leftComponent={<div>왼쪽</div>}
      />
      <Header
        title={"제목 + 왼쪽&오른쪽 컴포넌트 상단 바"}
        leftComponent={<div>왼쪽</div>}
        rightComponent={<div>오른쪽</div>}
      />
      메인 페이지, 컨텐츠 설정중입니다.
    </Layout>
  )
}

export default Main
