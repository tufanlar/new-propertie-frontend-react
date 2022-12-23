import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import PageTemplate from '../components/body/page-template.component';

function AddPagesPage() {
  return (
    <PageContainer>
      <PageTemplate pageName = {`Add Pages Page`} />
    </PageContainer>
  )
}

export default AddPagesPage