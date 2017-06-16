import { combineReducers } from 'redux'
import todoReducer from './todo'

const demoReducer = combineReducers({
  todos: todoReducer,
})

export default demoReducer
