import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MyNav = styled.nav.attrs({
  className: "flex grow justify-around"
})``;

const NewLink = styled(Link)`
  display: inline-block;
`;

const NewLinkButton = styled(NewLink).attrs({
  className: " "
})`
    cursor:pointer;
`;


function Navbar() {
  return (
      <MyNav>
        <NewLink to="/">Home</NewLink>
        <NewLink to="/blogs">Blogs</NewLink>
        <div>
          <NewLinkButton>Pages</NewLinkButton>
        </div>
        <NewLink to="/new-demand">New Demand</NewLink>
      </MyNav>
  )
}

export default Navbar