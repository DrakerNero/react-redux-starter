import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers'

const configureStore = (initialState, history) => {
  const sagaMiddleware = createSagaMiddleware()
  let enhancer = compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  )
  if (window.__REDUX_DEVTOOLS_EXTENSION__) { // eslint-disable-line no-underscore-dangle
    enhancer = compose(
      enhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
    )
  }
  const store = createStore(
    connectRouter(history)(rootReducer), // attach router state to new root reducer
    initialState,
    enhancer,
  )
  // sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default // eslint-disable-line
      store.replaceReducer(connectRouter(history)(nextRootReducer))
    })
  }

  return store
}

export default configureStore
