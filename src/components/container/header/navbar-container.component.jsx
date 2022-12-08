import React from 'react'
import styled from 'styled-components';


const NavbarWrapper = styled.div.attrs({
  className: "flex justify-center items-center invisible md:visible grow"
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