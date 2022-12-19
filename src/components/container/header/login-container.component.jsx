import React from 'react'
import styled from 'styled-components';

const LoginWrapper = styled.div.attrs({
  className: "flex flex-none justify-center items-center" 
})`
  min-width: 12rem;
`;


function LoginContainer({children}) {
  return (
    <LoginWrapper>
      {children}
    </LoginWrapper>
  )
}

export default  LoginContainer;