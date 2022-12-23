import React from 'react'
import PageTemplate from '../components/body/page-template.component'
import PageContainer from '../components/container/page/page-container.component'


function WelcomePage() {
  return (
    <PageContainer>
      <PageTemplate pageName = "Home Page" />
    </PageContainer>
  )
}

export default WelcomePage