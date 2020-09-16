import React, {Component} from 'react';
import Route from '../router'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {savePageInfo} from "../store/action";
import {Link} from 'react-router-dom'
class App extends Component {
  static propTypes = {
    pageInfo: PropTypes.object,
    savePageInfo: PropTypes.func
  }

  constructor (props) {
    super(props)
    this.props.savePageInfo({
      hasBack: true,
      hasTitle: true,
      hasFooter: true,
      title: '我的',
      backUrl: '',
      tabIndex: 4
    })
  }
  componentDidMount () {
    // this.initData()
  }

  changeTab = (index) => {
    //this.props.modifyPageInfo({tabIndex: index})
  }
  goBack = ()=> {
    if(this.props.pageInfo.backUrl.length===0){
      window.history.back()
    }else{
      window.location.hash=this.props.pageInfo.backUrl
    }
  }
  render () {
    return (
      <div className="App">
        {this.props.pageInfo.hasTitle ?
          <header className="app-header">
            {this.props.pageInfo.hasBack ?
              <i className="iconfont iconfanhui back" onClick={this.goBack}></i>
              : ''
            }
            <span className="title">{this.props.pageInfo.title}</span>
          </header>
          : ''
        }
        <div className="main-body">
          <Route></Route>
        </div>
        {this.props.pageInfo.hasFooter ?
          <footer className="app-footer main-menus">
            <div className={this.props.pageInfo.tabIndex === 1 ? 'main-menu-item menu-active' : 'main-menu-item'}
                 onClick={this.changeTab(1)}>
              <i className="iconfont iconelema"></i>
              <span>外卖</span>
            </div>
            <div className={this.props.pageInfo.tabIndex === 2 ? 'main-menu-item menu-active' : 'main-menu-item'}
                 onClick={this.changeTab(2)}>
              <i className="iconfont iconsousuo"></i>
              <span>搜索</span>
            </div>
            <div className={this.props.pageInfo.tabIndex === 3 ? 'main-menu-item menu-active' : 'main-menu-item'}
                 onClick={this.changeTab(3)}>
              <i className="iconfont icondingdan"></i>
              <span>订单</span>
            </div>
            <div className={this.props.pageInfo.tabIndex === 4 ? 'main-menu-item menu-active' : 'main-menu-item'}
                 onClick={this.changeTab(4)}>
              <i className="iconfont iconwodedangxuan"></i>
              <span>我的</span>
            </div>
          </footer> : ''
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pageInfo: state.pageInfo
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    savePageInfo: (pageInfo) => dispatch(savePageInfo(pageInfo))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
