import * as Types from './types'

const addTodo = (value) => {
  return {
    type: Types.ADD_TODO_LIST,
    payload: {
      id: Date.now(),
      value,
      status: 'active',
    },
  }
}

const toggleStatus = (id) => {
  return {
    type: Types.TODO_TOGGLE_STATUS,
    payload: {
      id,
    },
  }
}

const changeTodoStatus = (status) => {
  return {
    type: Types.TODO_CHANGE_STATUS,
    payload: {
      status,
    },
  }
}

export {
  addTodo,
  toggleStatus,
  changeTodoStatus,
}
