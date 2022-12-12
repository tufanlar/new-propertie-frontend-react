import React from 'react'
import styled from 'styled-components';


const HeaderWrapper = styled.div.attrs({
  className: "flex propertie-header sticky top-0 "
})`
  
`;

function HeaderContainer({children}) {
  return (
    <HeaderWrapper>
        {children}
    </HeaderWrapper>
  )
}

export default HeaderContainer