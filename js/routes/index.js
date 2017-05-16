import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import MainLayout from '../containers/contentMain'

// const componentHome = () => (<h1><Link to="in">Home</Link></h1>)
const componentHome = () => (<h1><Link to="in">Home</Link></h1>)
const componentIndex = () => (<h1><Link to="/">Index</Link></h1>)


const routes = (
  <div>
    <Switch>
      <Route exact path="/" render={MainLayout} />
      <Route exact path="/in" render={componentIndex} />
    </Switch>
  </div>
)

export default routes
