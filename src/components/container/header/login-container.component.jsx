import React from 'react'
import styled from 'styled-components';

const LoginWrapper = styled.div.attrs({
  className: "flex flex-none justify-center items-center" 
})`
  min-width: 12rem;
  border:1px solid rgb(243,123,108);
`;


function LoginContainer({children}) {
  return (
    <LoginWrapper>
      {children}
    </LoginWrapper>
  )
}

export default  LoginContainer;