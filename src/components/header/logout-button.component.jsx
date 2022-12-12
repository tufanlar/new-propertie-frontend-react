import React from 'react';
import {BtnWrapper, LinkWrapper} from './login-button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LogoutButton() {

  return (
    <BtnWrapper>
        <LinkWrapper to = "/logout">
            Logout
            <span className="ml-2">
              <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
            </span>
        </LinkWrapper>
    </BtnWrapper>
  )
}

export default LogoutButton