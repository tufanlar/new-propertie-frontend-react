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
import { useLocation } from 'react-router-dom';

function Header() {

  const token = useSelector(selectUserToken);
  const { pathname } = useLocation();
  const urls = ["login", "signup", "forget"];
  const isShowMenu = urls.find( url => url === pathname.slice(1)) === undefined ? true: false;


  return (
    <HeaderContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavbarContainer>
          { isShowMenu && <Navbar /> }
        </NavbarContainer>
        <LoginContainer>
          { isShowMenu && ( token === undefined ? 
              <LoginButton /> : 
              <LogoutButton /> )
          }
        </LoginContainer>
    </HeaderContainer>
  )
}

export default Header