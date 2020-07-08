import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect,BrowserRouter} from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'

const profile = asyncComponent(()=>import('../pages/profile/profile'))
export default class RouteConfig extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/profile' exact component={profile}/>
          <Redirect exact from='/' to='/profile'/>
        </Switch>
      </BrowserRouter>
    )
  }
}