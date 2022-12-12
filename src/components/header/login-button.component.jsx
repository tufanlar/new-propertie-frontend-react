import React from 'react';
import  styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const BtnWrapper = styled.div.attrs({
    className: "hidden md:flex"
})`
`;

export const LinkWrapper = styled(Link).attrs({
    className: "login-btn"
})`
`;

function LoginButton() {

  return (
    <BtnWrapper>
        <LinkWrapper to = "/login">
            <span className="mr-2">
             <FontAwesomeIcon icon="fa-solid fa-user" />
            </span>
            Login
        </LinkWrapper>
    </BtnWrapper>
  )
}

export default LoginButton