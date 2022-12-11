import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'

function BlogsPage(props) {
    
    const { catTagId } = useParams();
    // 

    return (
        <PageContainer>
            <h1>Blogs Page CategoryId: { catTagId }</h1>
        </PageContainer>
    )
}

export default BlogsPage