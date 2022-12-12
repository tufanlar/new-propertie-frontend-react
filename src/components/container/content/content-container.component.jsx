import React from 'react';
import styled from 'styled-components';


const ContentWrapper = styled.div.attrs({
    className: "flex propertie-content"
  })`
    border:1px solid rgba(23,69,122,255);
  `;
  

function ContentContainer({children}) {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>
  )
}

export default ContentContainer