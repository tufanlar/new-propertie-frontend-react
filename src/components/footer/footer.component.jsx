import React from 'react';
import FooterContainer from '../container/footer/footer-container.component';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';


const LeftWrapper = styled.div.attrs({
  className: "block font-bold"
})`
  padding-left:20px;
`;

const CenterWrapper = styled.div.attrs({
  className: "flex "
})``;

const RightWrapper = styled.div.attrs({
  className: "flex"
})`
  padding-right:20px;
`;


const NewLink = styled(Link)`
  display: inline-block;
  padding-right:15px;
`;

function Footer() {

  const { isAdmin } = useSelector(selectCurrentUser);
  console.log("is Admin" , isAdmin);

  return (
    <FooterContainer>
      <LeftWrapper>

        { isAdmin && 
          <nav>
            <NewLink to="/add-category">Add Category</NewLink>
            <NewLink to="/add-blog">Add Blog</NewLink>
            <NewLink to="/add-pages">Add Pages</NewLink>
            <NewLink to="/add-page-section">Add Page Section</NewLink>
          </nav>
        }

      </LeftWrapper>
      <CenterWrapper>
      </CenterWrapper>
      <RightWrapper>
        <h1> Propertie v1 </h1>
      </RightWrapper>
    </FooterContainer>
  )
}

export default Footer