import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {modifyUserInfo} from '../../..//store/action'

class Name extends Component{
  static propTypes = {
    modifyUserInfo: PropTypes.func.isRequired,
    userInfo: PropTypes.object
  }
  render(){
    return(
      <div>修改用户名</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    modifyUserInfo: (key, value) => dispatch(modifyUserInfo(key, value))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Name)
