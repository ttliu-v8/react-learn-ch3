import React, {Component} from 'react'
import './login.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {setStore} from '../../utils/commons'
import {saveUserInfo} from '../../store/action'
import {getImgPath} from '../../utils/commons'
import Alert from '../../components/alert_tip/alert_tip'
import API from '../../api/api'

class Login extends Component {
  static propTypes = {
    userInfo: PropTypes.object.isRequired,
    saveUserInfo: PropTypes.func.isRequired
  }
  state = {
    mobileCode: '',
    userAccount: '',
    hasAlert: false,
    alertText: '',
    password: '',
    codeNumber: '',
    captchaCodeImg: '',
    showPwd: false,
    loginWay: false
  }
  handleInput = (type, event) => {
    let value = event.target.value
    let newState = {}
    newState[type] = value
    this.setState(newState)
  }
  changePasswordType = () => {
    this.setState({
      showPwd: !this.state.showPwd
    })
  }
  getCaptchaCode = async () => {
    let res = await API.getCaptchaCode()
    this.setState({
      captchaCodeImg: res.code
    })
  }
  closeTip = () => {
    this.setState({
      hasAlert: false
    })
  }
  mobileLogin = async () =>{
    let isValidate,alertText
    if (!this.state.userAccount) {
      alertText = '请输入手机号/邮箱/用户名'
      isValidate = true
    } else if (!this.state.password){
      alertText = '请输入密码'
      isValidate = true
    } else if (!this.state.codeNumber) {
      alertText = '请输入验证码'
      isValidate = true
    }
    if (isValidate) {
      this.setState({
        hasAlert: true,
        alertText
      })
      return
    }
    let data = {
      username:this.state.userAccount,
      password: this.state.password,
      captcha_code:this.state.codeNumber
    }
    let userInfo = await API.accountLogin(data)
    if(userInfo.tip){
      this.setState({
        hasAlert:true,
        alertText:userInfo.response.message
      })
      this.getCaptchaCode()
      return
    }
    setStore('user_id',userInfo.user_id)
    userInfo.imgPath = userInfo.avatar.indexOf('/') !== -1? '/img/' + userInfo.avatar:getImgPath()
    this.props.saveUserInfo(userInfo)
    this.props.history.push('/profile')
  }
  componentDidMount () {
    this.getCaptchaCode()
  }
  render () {
    return (
      <div>
        {this.state.loginWay ?
          <form className="login-form">
            <ul></ul>
          </form> :
          <form className="login-form">
            <ul>
              <li>
                <input className="input" placeholder="账号" value={this.state.userAccount}
                       onChange={this.handleInput.bind(this, 'userAccount')}/>
              </li>
              <li>
                <input type={this.state.showPwd ? 'text' : 'password'} className="input" placeholder='密码'
                       value={this.state.password} onChange={this.handleInput.bind(this, 'password')}/>
                <i className={`iconfont iconyanjing icon-eyes ${this.state.showPwd ? 'icon-eyes-blue' : ''}`}
                   onClick={this.changePasswordType.bind(this)}></i>
              </li>
              <li>
                <input className="input" placeholder="验证码" value={this.state.codeNumber} onChange={this.handleInput.bind(this, 'codeNumber')}/>
                <img src={this.state.captchaCodeImg} alt="验证码" className="yzm"/>
                <span className="btn-yzm" onClick={this.getCaptchaCode.bind(this)}>看不清<br/>换一张</span>
              </li>
            </ul>
            <div className="tips"><span>温馨提示：</span><span> 未注册过的账号， 登录时自动注册<br />注册过的用户可凭证账号密码登录</span></div>
            <button className="btn-login" onClick={this.mobileLogin} type={'button'}>登录</button>
          </form>
        }
        {this.state.hasAlert&&<Alert logout={()=> {return false}} alertText={this.state.alertText} closeTip={this.closeTip}/>}
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
export default connect(mapStateToProps,mapDispatchToProps)(Login)
