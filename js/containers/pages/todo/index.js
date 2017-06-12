import React, { Component } from 'react'
// import { connect } from 'react-redux'
import ContentTodo from '../../../components/pages/todo'
import MainLayout from '../../../routes/layouts/main'


const WrapperContentTodo = () => {
  return (
    <div>
      <MainLayout>
        <ContentTodo />
      </MainLayout>
    </div>
  )
}

export default WrapperContentTodo
