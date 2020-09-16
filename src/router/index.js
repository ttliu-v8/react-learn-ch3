import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
const profile = asyncComponent(()=>import('../pages/profile/profile'))
const login = asyncComponent(()=>import('../pages/login/login'))
const info = asyncComponent(()=>import('../pages/info/info'))
const setUser = asyncComponent(()=>import('../pages/setUser/setUser'))
class RouteConfig extends Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/profile" exact component={profile}/>
          <Route path="/login" component={login}/>
          <Route path="/info" component={info}/>
          <Route path="/setuser"  component= {setUser}/>
          <Redirect exact from="/" to="/profile"/>
        </Switch>
      </HashRouter>
    )
  }
}
export default RouteConfig

