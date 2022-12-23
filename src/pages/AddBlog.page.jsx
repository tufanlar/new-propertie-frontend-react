import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import PageTemplate from '../components/body/page-template.component';

function AddBlogPage() {
  return (
    <PageContainer>
      <PageTemplate pageName = {`Add Blog Page`} />
    </PageContainer>
  )
}

export default AddBlogPage