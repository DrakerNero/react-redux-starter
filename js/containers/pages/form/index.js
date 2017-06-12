import React from 'react'
import { connect } from 'react-redux'
import ContentForm from '../../../components/pages/form'
import MainLayout from '../../../routes/layouts/main'

const WrapperContentForm = () => (
  <MainLayout>
    <ContentForm />
  </MainLayout>
)

export default connect(null)(WrapperContentForm)
