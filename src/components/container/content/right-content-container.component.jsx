import React from 'react';
import styled from 'styled-components';


const RightContentWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
  })`
    border:1px solid rgba(23,69,122,255);
    width: %20;
  `;
  

function RightContentContainer({children}) {
  return (
    <RightContentWrapper>
      {children}
    </RightContentWrapper>
  )
}

export default RightContentContainer