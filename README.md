##当前项目用于学习react
仿照git上有名的项目react-elm项目学习，编写代码。<br>
项目使用react脚手架[Create React App]，生成项目框架。<br>
 更改react-scripts下配置文件如下:<br>
 scripts/start.js  代码第60行，更改端口号；<br>
 scripts/start.js 从代码第124行，可知本地接口代理proxy配置，在package.json文件中添加“proxy”字段，例如："proxy": "http://cangdu.org:8001"<br>
config/webpack.config.js 代码第145起，注释原devtool， 修改为：devtool:isEnvProduction?'none':'cheap-module-eval-source-map',以方便本地调试。

#### 项目入口 index.js
#### 单页程序
pages/App.jsx <br>
路由：router <br>
状态管理：store
