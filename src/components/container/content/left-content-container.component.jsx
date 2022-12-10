import React from 'react';
import styled from 'styled-components';


const LeftContentWrapper = styled.div.attrs({
    className: "flex justify-center items-center"
  })`
    border:1px solid rgba(23,69,122,255);
    width: %80;
  `;
  

function LeftContentContainer({children}) {
  return (
    <LeftContentWrapper>
      {children}
    </LeftContentWrapper>
  )
}

export default LeftContentContainer