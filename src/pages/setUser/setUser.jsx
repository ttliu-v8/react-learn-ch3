import './setUser.css'
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { is, fromJS } from 'immutable';  // 保证数据的不可变
import {Switch, Route} from 'react-router-dom'
import {saveAttrInfo} from '../../store/action'
import asyncComponent from '../../utils/asyncComponent'
const Name = asyncComponent(()=>import('./name/name'))
class SetUser extends Component{
  static propTypes = {
    userInfo:PropTypes.object.isRequired,
    saveAttrInfo:PropTypes.func.isRequired
  }
  state = {
    hasAlert:false,
    alertText:'请在手机App中打开',
    logout:false
  }
  render(){
    return(
     <div>
      <Switch>
        <Route path={`${this.props.match.path}/name`} component={Name}/>
      </Switch>
     </div>
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
    saveAttrInfo: (attr, operate) => dispatch(saveAttrInfo(attr, operate))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SetUser)
