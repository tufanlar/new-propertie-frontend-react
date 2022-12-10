import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'

function BlogsPage() {
    
    const { catId } = useParams();

    return (
        <PageContainer>
            <h1>Blogs Page CategoryId: { catId }</h1>
        </PageContainer>
    )
}

export default BlogsPage