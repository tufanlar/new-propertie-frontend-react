import React from 'react';
import { Link } from 'react-router-dom';


function Logo() {
  
  return (
    <Link to="/">
      <img src="/img/logo-png.png" alt="Properti Logo" className="bg-auto" />
    </Link>
  )
}

export default Logo