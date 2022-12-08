import React from 'react';
import styled from 'styled-components';


const ContentWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
  })`
    border:1px solid rgba(23,69,122,255);
    min-height: var(--content-height); 
  `;
  

function ContentContainer({children}) {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default ContentContainer