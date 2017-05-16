import { combineReducers } from 'redux'
import { reducer as uiReducer } from 'redux-ui'

const rootReducer = combineReducers({
  ui: uiReducer,
  initialState: { testId: 1 },
})

export default rootReducer
