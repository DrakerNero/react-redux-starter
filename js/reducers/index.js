import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'
import demoReducer from './demo'

const rootReducer = combineReducers({
  ui: uiReducer,
  initialState: { testId: 1 },
  demo: demoReducer,
})

export default rootReducer
