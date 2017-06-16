import * as Types from '../../actions/demo/todo/types'

const initialState = {
  todoListStatus: 'all',
  todoList: [{ id: 1, value: 'hello', status: 'active' }],
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TODO_LIST: {
      const newTodo = { ...state, todoList: [...state.todoList, action.payload] }

      return newTodo
    }
    case Types.TODO_TOGGLE_STATUS: {
      let newState = null
      newState = state.todoList.map((todo, index) => {
        if (Number(todo.id) === Number(action.payload.id)) {
          return {
            ...todo,
            status: (todo.status === 'inactive') ? 'active' : 'inactive',
          }
        }
        return todo
      })

      return { ...state, todoList: newState }
    }
    case Types.TODO_CHANGE_STATUS: {
      const newState = {
        ...state,
        todoListStatus: action.payload.status,
      }

      return newState
    }
    default:
      return state
  }
}

export default todo
