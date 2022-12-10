import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewLink = styled(Link)`
  color: red;
  display: inline-block;
  padding-right:20px;
  height:40px;
`;

function Navbar() {
  return (
    <div>
      <nav>
        <NewLink to="/">Home</NewLink>
        <NewLink to="/login">Login</NewLink>
        <NewLink to="/signup">SignUp</NewLink>
        <NewLink to="/add-pages">Add Pages</NewLink>
        <NewLink to="/add-blog">Add Blog</NewLink>
        <NewLink to="/add-category">Add Category</NewLink>
        <NewLink to="/add-page-section">Add Page Section</NewLink>
      </nav>
    </div>
  )
}

export default Navbar