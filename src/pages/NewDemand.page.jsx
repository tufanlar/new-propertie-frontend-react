import React from 'react'
import PageContainer from '../components/container/page/page-container.component'
import PageTemplate from '../components/body/page-template.component';

function NewDemandPage(props) {
    return (
        <PageContainer>
            <PageTemplate pageName = {`NewDemand Page`} />
        </PageContainer>
    )
}

export default NewDemandPage