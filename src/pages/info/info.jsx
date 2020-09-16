import './info.css'
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import API from '../../api/api'
import {imgUrl} from "../../config/envconfig";
import {modifyUserInfo} from '../../store/action'
import {Link} from 'react-router-dom'

class Info extends Component{
  static propTypes = {
    modifyUserInfo:PropTypes.func.isRequired,
    userInfo:PropTypes.object.isRequired
  }
  state = {
    hasAlert:false,
    alertText:'请在手机App中打开',
    logout:false
  }
  uploadImg = async event => {
    let formData = new FormData()
    formData.append('file',event.target.files[0])
    let result = await API.uploadImg(formData)
    this.props.modifyUserInfo(imgUrl + result.image_path)
  }
  render(){
    return(
      <ul className="info-ul">
        <li>
          <label htmlFor="">头像</label>
          <div><img src={this.props.userInfo.imgPath} alt="img-error" className={'photo-img'}/><span className="iconfont iconright"></span></div>
          <input type="file" className={'img-file'} onChange={this.uploadImg}/>
        </li>
        <li>
          <Link to='/setuser/name' key='k2' class={'info-link'}>
          <label htmlFor="">用户名</label>
          <div><div className={'filed'}>{this.props.userInfo.username}</div><span className="iconfont iconright"></span></div>
          </Link>
        </li>
        <li>
          <label htmlFor="">收获地址</label>
          <div><div className={'filed'}>{this.state.username}</div><span className="iconfont iconright"></span></div>
        </li>
        <li className={'title-li'}>
          账号绑定
        </li>
        <li>
          <label htmlFor="">手机</label>
          <div><span className="iconfont iconright"></span></div>
        </li>
        <li className={'title-li'}>
          安全设置
        </li>
        <li>
        <label htmlFor="">登录密码</label>
        <div><div className={'filed'}>修改</div><span className="iconfont iconright"></span></div>
        </li>
      </ul>
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
    modifyUserInfo: (imgpath) => dispatch(modifyUserInfo("imgpath", imgpath))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Info)
