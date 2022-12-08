import React from 'react'
import styled from 'styled-components';


const HeaderWrapper = styled.div.attrs({
  className: "flex sticky top-0 "
})`
  height: var(--header-height);
`;

function HeaderContainer({children}) {
  return (
    <HeaderWrapper>
        {children}
    </HeaderWrapper>
  )
}

export default HeaderContainer