import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import './style'

const App = ({ history }) => ( // eslint-disable-line react/prop-types
  <ConnectedRouter history={history}>
    {routes}
  </ConnectedRouter>
)



export default App
