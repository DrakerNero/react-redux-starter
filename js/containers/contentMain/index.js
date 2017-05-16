import React from 'react'
import { connect } from 'react-redux'
import ContentMain from '../../components/contentMain'
import MainLayout from '../../routes/layouts/main'

const WrapperContentMain = () => (
  <div className="wrapper-content-main">
    <MainLayout>
      <ContentMain />
    </MainLayout>
  </div>
)

export default WrapperContentMain


