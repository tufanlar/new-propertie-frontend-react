import React, { useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/user/user.slice';
import  styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { initialUserState } from '../../store/user/user.slice';

const LogoutButtonWrapper = styled.div.attrs({
  className: "hidden md:flex justify-center login-btn p-3"
})`
  cursor:pointer;
`;



function LogoutButton() {

  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = useCallback(() => {
    dispatch(setUserData({
      token: initialUserState.token,
      userInfo : initialUserState.currentUser
    }));
    navigate('/');
  },[dispatch, navigate]);
  
  return (
    <LogoutButtonWrapper onClick = { logoutHandler }>
        Logout
        <span className="ml-2">
          <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
        </span>
    </LogoutButtonWrapper>
  )
}

export default LogoutButton