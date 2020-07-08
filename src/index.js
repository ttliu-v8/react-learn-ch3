import React from 'react'
import ReactDOM from 'react-dom'
import './style/main.css'
import './assets/iconfont/iconfont.css'
import {Provider} from 'react-redux'
import App from './pages/App'
import * as serviceWorker from './serviceWorker'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
