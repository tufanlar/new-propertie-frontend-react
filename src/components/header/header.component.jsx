import React from 'react'
import HeaderContainer from '../container/header/header-container.component'
import LogoContainer from '../container/header/logo-container.component'
import NavbarContainer from '../container/header/navbar-container.component'
import LoginContainer from '../container/header/login-container.component'
import Logo from './logo.component'
import Navbar from './navbar.component'
import LoginButton from './login-button.component'

function Header() {
  return (
    <HeaderContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavbarContainer>
            <Navbar />
        </NavbarContainer>
        <LoginContainer>
            <LoginButton />
        </LoginContainer>
    </HeaderContainer>
  )
}

export default Header