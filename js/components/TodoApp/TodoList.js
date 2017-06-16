import React, { Component, PropTypes } from "react";

class TodoList extends Component {
  static defaultProps = {
    todos: []
  };

  static propTypes = {
    todos: PropTypes.object,
    handdleOnClickTodo: PropTypes.func
  };

  handleOnClickTodo = (e) => {
    const id = e.target.getAttribute('data-key')
    this.props.handleOnClickTodo(id)
  }

  handleTodoListItem = (value, id, status, handleOnClickTodo, index) => {
    return (
      <li
        key={index}
        data-key={id}
        onClick={handleOnClickTodo}
        className={(status === 'inactive') ? 'inactive' : ''}
      >
        {value}
      </li>
    )
  }

  printTodo = () => {
    const { todos } = this.props;
    const todoStatus = todos.todoListStatus
    if (todos.todoList.length > 0) {
      return (
        <ul>
          {todos.todoList.map((todo, index) => {

            if (todoStatus === 'all') {
              if (todo.status !== 'remove') return this.handleTodoListItem(
                todo.value,
                todo.id,
                todo.status,
                this.handleOnClickTodo,
                index,
              )
            }

            if (todoStatus === todo.status) return this.handleTodoListItem(
              todo.value,
              todo.id,
              todo.status,
              this.handleOnClickTodo,
              index,
            )
          })}
        </ul>
      );
    }

    return null;
  };

  render() {
    return (
      <div className="todo-list">
        {this.printTodo()}
      </div>
    );
  }
}

export default TodoList;
