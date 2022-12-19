import React from 'react';
import styled from 'styled-components';


const ContentWrapper = styled.div.attrs({
    className: "flex propertie-content"
  })`
  `;
  

function ContentContainer({children}) {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default ContentContainer