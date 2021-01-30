import { connect } from "react-redux"
import * as SampleAction from "../components/apiContainer/sample"
import React from "react"
import { compose } from "redux"

const { requestPlus, requestMinus } = SampleAction

const mapStateToProps = state => ({
  number: state.SampleReducer.number,
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
