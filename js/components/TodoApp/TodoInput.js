import React, { Component, PropTypes } from 'react'

class TodoInput extends Component {
  static propTypes = {
    handleAddTodo: PropTypes.func,
  }

  clearInput = () => {
    this.isInput.value = ''
  }

  onAddTodo = () => {
    this.props.handleAddTodo(this.isInput.value)
    this.clearInput()
  }

  onChangeTodo = (e) => {
    if (e.keyCode === 13) {
      this.onAddTodo()
    }
  }

  render() {
    const { handleAddTodo } = this.props
    return (
      <div className="todo-input-component">
        <div className="container">
          <div className="row no-gutter">
            <div className="zen-10">
              <input
                ref={(input) => this.isInput = input}
                // onChange={this.onChangeTodo}
                onKeyDown={this.onChangeTodo}
                className="todo-input"
                type="text"
              />
            </div>
            <div className="zen-2">
              <button onClick={this.onAddTodo} className="btn btn-success btn-full todo-add-btn">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoInput
