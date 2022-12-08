import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div.attrs({
  className: "flex justify-end items-center pr-4"
})`
  border: 1px solid rgba(23,69,122,255);
  height: var(--footer-height);
`;

function FooterContainer({children}) {
  return (
    <FooterWrapper>
        {children}
    </FooterWrapper>
  )
}

export default FooterContainer