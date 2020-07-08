import React,{Component} from 'react'
import './profile.css'
class Profile extends Component{
  render () {
    return(
      <div>
        <div className="">
          <img src="../../../public/images/user-photo-default.png" alt=""/>
          <p>
            <button>登录/注册</button>
            <button></button>
          </p>
        </div>
      </div>
    )
  }
}
export default Profile