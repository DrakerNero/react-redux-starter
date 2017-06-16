import React, { Component } from 'react'
import { connect } from 'react-redux'
// import ContentTodo from '../../../components/pages/todo'
import TodoApp from '../../../components/TodoApp'
import MainLayout from '../../../routes/layouts/main'

const WrapperContentTodo = () => (
  <div className="wrapper-todo">
    <MainLayout>
      <div className="content-todo-page">
        <div className="container">
          <TodoApp />
        </div>
      </div>
    </MainLayout>
  </div>
)

export default WrapperContentTodo
