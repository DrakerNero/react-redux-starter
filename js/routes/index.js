import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ContentMain from '../containers/pages/main'
import ContentTodo from '../containers/pages/todo'
import ContentForm from '../containers/pages/form'

const RenderContentMain = () => <ContentMain />
const RenderContentTodo = () => <ContentTodo />
const RenderContentForm = () => <ContentForm />


const routes = (
  <div>
    <Switch>
      <Route exact path="/" render={RenderContentMain} />
      <Route exact path="/todo" render={RenderContentTodo} />
      <Route exact path="/form" render={RenderContentForm} />
    </Switch>
  </div>
)

export default routes
