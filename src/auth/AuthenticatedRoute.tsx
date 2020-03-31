import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import authService from './authService'

export default function AuthenticatedRoute({ component: Component, ...rest }: RouteProps ) {
  return (
    <Route {...rest} render={(props) => {
      if (authService.isAuthenticated()) {
        if (!Component) { return null }
        return <Component {...props}/>
      } else {
        authService.redirect = window.location.href.replace(new RegExp(`^${window.location.origin}`), '')
        return <Redirect to="/login"/>
      }
    }}/>
  )
}