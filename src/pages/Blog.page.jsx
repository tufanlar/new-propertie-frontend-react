import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'

function BlogPage() {
    const { blogId } = useParams();
  return (
    <PageContainer>
      <h1>Blog Page BlogId: { blogId }</h1>
    </PageContainer>
  )
}

export default BlogPage