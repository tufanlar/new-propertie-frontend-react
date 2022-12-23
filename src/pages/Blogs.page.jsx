import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'
import PageTemplate from '../components/body/page-template.component';

function BlogsPage(props) {
    
    const { catTagId } = useParams();

    return (
        <PageContainer>
            <PageTemplate pageName = {`Blogs Page CategoryId: ${catTagId }`} />
        </PageContainer>
    )
}

export default BlogsPage