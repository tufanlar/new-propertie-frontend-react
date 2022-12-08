import React from 'react'
import Header from '../../header/header.component';
import ContentContainer from '../content/content.component';
import Footer from '../../footer/footer.component';
import styled from 'styled-components';


export const MainWrapper = styled.div.attrs({
    className: "container mx-auto mt-2 mb-2"
})`
    
`;


function PageContainer({children}) {
  return (
    <MainWrapper>
        <Header />
        <ContentContainer>
          {children}
        </ContentContainer>
        <Footer />
    </MainWrapper>
  )
}

export default PageContainer