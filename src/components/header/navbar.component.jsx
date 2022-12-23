import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MyNav = styled.nav.attrs({
  className: "flex grow justify-around"
})``;

const NewLink = styled(Link).attrs({
  className: "text-primary"
})`
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
        <NewLink to="/blogs/trends">Blogs</NewLink>
        <div>
          <NewLinkButton>Pages</NewLinkButton>
        </div>
        <NewLink to="/new-demand"><span className="text-secondary" >New Demand</span></NewLink>
      </MyNav>
  )
}

export default Navbar