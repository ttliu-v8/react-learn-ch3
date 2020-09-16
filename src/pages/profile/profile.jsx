import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './profile.css'
import API from '../../api/api'
import {getStore, getImgPath} from '../../utils/commons'
import {is, fromJS} from 'immutable'
import {saveUserInfo} from "../../store/action";

class Profile extends Component {
  static propTypes = {
    userInfo: PropTypes.object.isRequired,
    saveUserInfo: PropTypes.func.isRequired,
  }
  constructor (props) {
    super(props);
  }
  state = {
    username: '登录/注册',
    mobile: '暂无绑定手机',
    imgpath: '',   // 图片路径
    balance: 0,     //我的余额
    count: 0,       //优惠券个数
    pointNumber: 0, //积分数
    hasAlert: '',   // tip是否显示
    alertText: '请在手机APP中打开',
  }
  initData = () => {
    let newState = {}
    if (this.props.userInfo && this.props.userInfo.user_id) {
      newState.mobile = this.props.userInfo.mobile || '暂无手机绑定'
      newState.username = this.props.userInfo.username
      newState.balance = this.props.userInfo.balance
      newState.count = this.props.userInfo.gift_amount
      newState.pointNumber = this.props.userInfo.point
    } else {
      newState.mobile = '暂无手机绑定'
      newState.username = '登录/注册'
    }
    this.setState(newState)
  }
  getUserInfo = async () => {
    let userInfo = await API.getUser({user_id: getStore('user_id')})
    userInfo.imgPath = userInfo.avatar.indexOf('/') !== -1 ? '/img/' + userInfo.avatar : '/images/user-photo-default.png'
    this.props.saveUserInfo(userInfo)
    this.initData()
  }

  componentDidMount () {
    if (!this.props.userInfo.user_id) {
      this.getUserInfo()
    } else {
      this.initData()
    }
  }
  componentWillReceiveProps(nextProps){  // 属性props改变时候触发
    if(!is(fromJS(this.props.proData), fromJS(nextProps.proData))){   //
      this.initData(nextProps);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {   // 判断是否要更新render, return true 更新  return false不更新
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
  }
  render () {
    return (
      <div>
        <div className="profile-header">
          <img src={this.props.userInfo && this.props.userInfo.imgPath ? this.props.userInfo.imgPath : ''} alt="error"
               className="user-img"/>
          <p className="user-info">
            <Link className="link-login"
                  to={this.props.userInfo && this.props.userInfo.user_id ? '/info' : 'login'}>{!this.props.userInfo.user_id?'登录/注册':this.props.userInfo.username}</Link><br/>
            <i className="iconfont iconphone"></i><a>{this.state.mobile ? this.state.mobile : '暂无绑定手机'}</a>
          </p>
        </div>
        <ul className="account-info">
          <li><p className="p-no"><span className="account-no txt-orange">0.00</span>元</p><p>我的余额</p></li>
          <li><p className="p-no"><span className="account-no txt-red">0</span>个</p><p>我的优惠</p></li>
          <li><p className="p-no"><span className="account-no txt-green">0</span>个</p><p>我的积分</p></li>
        </ul>
        <ul className="menu-list">
          <li><span><i className="iconfont icondingdan menu-item-icon"></i>我的订单</span><i
            className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconjifen menu-item-icon"></i>积分商城</span><i
            className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconVIP menu-item-icon"></i>饿了么会员</span><i
            className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconfuwuzhongxin menu-item-icon"></i>服务中心</span><i
            className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconxiazai menu-item-icon"></i>下载饿了么APP</span><i
            className="iconfont iconright"></i></li>
        </ul>
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
    saveUserInfo: (userInfo) => dispatch(saveUserInfo(userInfo))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Profile)
