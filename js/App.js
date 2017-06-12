import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import './style'

const App = ({ history }) => ( // eslint-disable-line react/prop-types
  <ConnectedRouter history={history}>
    <div className="root-app">
      {routes}
    </div>
  </ConnectedRouter>
)



export default App
