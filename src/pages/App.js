import React from 'react';
import Route from '../router'

function App () {
  return (
    <div className="App">
      <header className="app-header">
        <i className="iconfont iconfanhui back"></i>
        <span className="title">标题</span>
      </header>
      <div className="main-body">
        <Route></Route>
      </div>
      <footer className="app-footer main-menus">
        <div className="main-menu-item">
          <i className="iconfont iconelema"></i>
          <span>外卖</span>
        </div>
        <div className="main-menu-item">
          <i className="iconfont iconsousuo"></i>
          <span>搜索</span>
        </div>
        <div className="main-menu-item">
          <i className="iconfont icondingdan"></i>
          <span>订单</span>
        </div>
        <div className="main-menu-item">
          <i className="iconfont iconwodedangxuan"></i>
          <span>我的</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
