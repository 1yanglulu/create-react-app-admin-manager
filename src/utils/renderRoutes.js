import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
const renderRoutes = (routes, authed, authPath='/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {
      routes.map((route, i) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
            console.log("props",props)
          if (!route.requiresAuth || authed || route.path === authPath) {
              console.log("1111",{...props})
              console.log(route)
              console.log(<route.component {...props} {...extraProps} route={route} />)
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null

export default renderRoutes