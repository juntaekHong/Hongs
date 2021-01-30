import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"

import * as SampleAction from "../components/apiContainer/sample"

const { requestPlus, requestMinus } = SampleAction

const mapStateToProps = state => ({
  _number: state.SampleReducer._number,

  _windowWidth: state.ConfigReducer._windowWidth,
})

const mapDispatchToProps = dispatch => ({
  requestPlus: param => dispatch(requestPlus(param)),
  requestMinus: param => dispatch(requestMinus(param)),
})

const WithMainHoc = ChildComponent => props => {
  return <ChildComponent {...props} />
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithMainHoc
)
