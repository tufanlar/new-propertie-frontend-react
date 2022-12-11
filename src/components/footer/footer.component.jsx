import React from 'react';
import FooterContainer from '../container/footer/footer-container.component';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  return (
    <FooterContainer>
      <LeftWrapper>

        <nav>
          <NewLink to="/add-category">Add Category</NewLink>
          <NewLink to="/add-blog">Add Blog</NewLink>
          <NewLink to="/add-pages">Add Pages</NewLink>
          <NewLink to="/add-page-section">Add Page Section</NewLink>
        </nav>

      </LeftWrapper>
      <CenterWrapper>
        <h1> Social Icons </h1>
      </CenterWrapper>
      <RightWrapper>
        <h1> Propertie v1 </h1>
      </RightWrapper>
    </FooterContainer>
  )
}

export default Footer