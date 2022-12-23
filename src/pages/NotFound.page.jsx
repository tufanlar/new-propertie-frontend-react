import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import PageTemplate from '../components/body/page-template.component';

function NotFoundPage() {
  return (
    <PageContainer>
      <PageTemplate pageName = {`NotFound Page`} />
    </PageContainer>
  )
}

export default NotFoundPage