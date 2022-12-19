import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div.attrs({
  className: "flex propertie-footer items-center justify-between"
})`
`;


function FooterContainer({children}) {
  return (
    <FooterWrapper>
        {children}
    </FooterWrapper>
  )
}

export default FooterContainer