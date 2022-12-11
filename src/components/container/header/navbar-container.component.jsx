import React from 'react'
import styled from 'styled-components';


const NavbarWrapper = styled.div.attrs({
  className: "flex items-center grow font-bold"
})`
  border:1px solid rgb(243,123,108);
  min-width: 10rem;
`;


function NavbarContainer({children}) {
  return (
    <NavbarWrapper>
      {children}
    </NavbarWrapper>
  )
}

export default  NavbarContainer