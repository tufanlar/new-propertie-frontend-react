import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import { useParams } from 'react-router-dom'

function PageContentPage() {
    const { pageId } = useParams(); 

    return (
        <PageContainer>
            <h1>PageContentPage Page ID: { pageId }</h1>
        </PageContainer>
  )
}

export default PageContentPage