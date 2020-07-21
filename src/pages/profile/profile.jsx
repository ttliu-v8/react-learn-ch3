import React,{Component} from 'react'
import './profile.css'
class Profile extends Component{
  render () {
    return(
      <div>
        <div className="profile-header">
          <img src="../../../images/user-photo-default.png" alt="error" className="user-img"/>
          <p className="user-info">
            <button className="btn-login">登录/注册</button><br/>
            <i className="iconfont iconphone"></i><a>暂无绑定手机</a>
          </p>
        </div>
        <ul className="account-info">
          <li><p className="p-no"><span  className="account-no txt-orange">0.00</span>元</p><p>我的余额</p></li>
          <li><p className="p-no"><span  className="account-no txt-red">0</span>个</p><p>我的优惠</p></li>
          <li><p className="p-no"><span  className="account-no txt-green">0</span>个</p><p>我的积分</p></li>
        </ul>
        <ul className="menu-list">
          <li><span><i className="iconfont icondingdan menu-item-icon"></i>我的订单</span><i className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconjifen menu-item-icon"></i>积分商城</span><i className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconVIP menu-item-icon"></i>饿了么会员</span><i className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconfuwuzhongxin menu-item-icon"></i>服务中心</span><i className="iconfont iconright"></i></li>
          <li><span><i className="iconfont iconxiazai menu-item-icon"></i>下载饿了么APP</span><i className="iconfont iconright"></i></li>
        </ul>
      </div>
    )
  }
}
export default Profile