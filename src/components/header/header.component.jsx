import React from 'react'
import HeaderContainer from '../container/header/header-container.component'
import LogoContainer from '../container/header/logo-container.component'
import NavbarContainer from '../container/header/navbar-container.component'
import LoginContainer from '../container/header/login-container.component'
import Logo from './logo.component'
import Navbar from './navbar.component'
import LoginButton from './login-button.component'
import LogoutButton from './logout-button.component'
import { useSelector } from 'react-redux';
import { selectUserToken } from '../../store/user/user.selector';


function Header() {

  const token = useSelector(selectUserToken);

  return (
    <HeaderContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavbarContainer>
            <Navbar />
        </NavbarContainer>
        <LoginContainer>
          { token === undefined ? 
            <LoginButton /> : 
            <LogoutButton />
          }
        </LoginContainer>
    </HeaderContainer>
  )
}

export default Header