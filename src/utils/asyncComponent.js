import React, {Component} from 'react'
import PropTypes from "prop-types";
import {modifyPageInfo} from "../store/action";
import {connect} from 'react-redux'
import pageConfig from '../config/pageInfo'
export default function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    static propTypes = {
      modifyPageInfo: PropTypes.func
    }

    constructor (props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount () {
      console.log(this.props)
      const {default: component} = await importComponent()
      let configKey = this.props.match.path
      let currConfig = pageConfig[configKey]
      this.props.modifyPageInfo(currConfig)
      this.setState({component})
    }

    render () {
      const C = this.state.component
      return C ? <C {...this.props} /> : null
    }
  }

  const mapStateToProps = (state) => {
    return {
      pageInfo: state.pageInfo
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      modifyPageInfo: (pageInfo) => dispatch(modifyPageInfo(pageInfo))
    }
  }
  const connComponent = connect(mapStateToProps, mapDispatchToProps)(AsyncComponent)
  return connComponent
}
