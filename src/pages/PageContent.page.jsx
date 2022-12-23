import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'
import PageTemplate from '../components/body/page-template.component';

function PageContentPage() {
    const { pageId } = useParams(); 
    return (
        <PageContainer>
            <PageTemplate pageName = {`PageContentPage Page ID: ${pageId }`} />
        </PageContainer>
  )
}

export default PageContentPage