import React from 'react'
import styled from 'styled-components';


const LogoWrapper = styled.div.attrs({
  className: "flex flex-none justify-center items-center"
})`
  border:1px solid rgba(23,69,122,255);
  min-width: 10rem;
`;



function LogoContainer({children}) {
  return (
    <LogoWrapper>
      {children}
    </LogoWrapper>
  )
}

export default LogoContainer