import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import * as ConfigAction from "../components/apiContainer/config"

const { setWidth, setMenu } = ConfigAction

const mapStateToProps = state => ({
  _windowWidth: state.ConfigReducer._windowWidth,
  _menuList: state.ConfigReducer._menuList,
})

const mapDispatchToProps = dispatch => ({
  setWidth: param => dispatch(setWidth(param)),
  setMenu: param => dispatch(setMenu(param)),
})

const WithMainHoc = ChildComponent => props => {
  return <ChildComponent {...props} />
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithMainHoc
)
