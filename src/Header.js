import React from 'react'
import {Link}from 'react-router-dom';

function Header() {
  return (
    <>
      headerです。

<nav>
    <ul>
       <li><Link to="/photo-upload" >Photo Upload</Link></li>
        <li><Link to="/photo-list">Photo List</Link></li>
    </ul>
</nav>
    </>
  )
}

export default Header
