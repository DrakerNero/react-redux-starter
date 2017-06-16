import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainLayout from '../../routes/layouts/main'
import { addTodo, toggleStatus, changeTodoStatus } from '../../actions/demo/todo'
import TodoInput from '../../components/TodoApp/TodoInput'
import TodoList from '../../components/TodoApp/TodoList'

const statusTodoList = [
  'all',
  'active',
  'inactive',
  'remove',
]

class WrapperContentTodo extends Component {

  static propTypes = {
    todos: PropTypes.object,
    actions: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
    }),
  }

  static defaultProps = {
    todos: [],
  }

  handleAddTodo = (value) => {
    this.props.actions.addTodo(value)
  }

  handleOnClickTodo = (id) => {
    this.props.actions.toggleStatus(id)
  }

  handleChangeShowTodoList = (e) => {
    const status = e.target.getAttribute('data-status')
    this.props.actions.changeTodoStatus(status)

  }

  render() {
    const { todos } = this.props
    return (
      <div className="wrapper-todo">
        <MainLayout>
          <div className="content-todo-page">
            <div className="container">
              <TodoInput handleAddTodo={this.handleAddTodo} />
              <div className="wrap-content-todo">
                <div className="left">
                  <TodoList todos={this.props.todos} handleOnClickTodo={this.handleOnClickTodo} />
                </div>
                <div className="right">
                  {
                    statusTodoList.map(status => {
                      return (
                        <button
                          onClick={this.handleChangeShowTodoList}
                          data-status={status}
                          className={`btn-todo-list-${status} ${(status === todos.todoListStatus) ? 'active' : ''}`}
                        >
                          {status}
                        </button>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.demo.todos,
  }
}

const actions = {
  addTodo: addTodo,
  toggleStatus: toggleStatus,
  changeTodoStatus: changeTodoStatus,
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrapperContentTodo)
