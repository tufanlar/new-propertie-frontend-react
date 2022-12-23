import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'
import PageTemplate from '../components/body/page-template.component';

function BlogPage() {
    const { blogId } = useParams();
  return (
    <PageContainer>
      <PageTemplate pageName = {`Blog Page BlogId: ${blogId }`} />
    </PageContainer>
  )
}

export default BlogPage