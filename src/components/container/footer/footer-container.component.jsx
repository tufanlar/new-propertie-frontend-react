import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div.attrs({
  className: "flex items-center justify-between"
})`
  min-height: var(--footer-height);
  border: 1px solid red;
`;


function FooterContainer({children}) {
  return (
    <FooterWrapper>
        {children}
    </FooterWrapper>
  )
}

export default FooterContainer