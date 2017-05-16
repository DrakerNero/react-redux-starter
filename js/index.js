import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createBrowserHistory } from 'history'
import App from './App'
import configureStore from './store'

const initialState = {}
const history = createBrowserHistory()
const store = configureStore(initialState, history)

const renderPage = Component => ReactDOM.render( // eslint-disable-line react/no-render-return-value
  <AppContainer>
    <Provider store={store}>
      <Component history={history} />
    </Provider>
  </AppContainer>
  , document.getElementById('root-container'))

renderPage(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default // eslint-disable-line global-require
    renderPage(NextApp)
  })
}
