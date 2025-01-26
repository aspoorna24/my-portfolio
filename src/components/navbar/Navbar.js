import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
         <span>&lt;</span> A S <span>/</span> POORNA <span>&gt;</span>
        </div>
       <div className='navbar-items'>
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Experience</div>
          <div>Projects</div>
          <div>Contact</div>
       </div>

    </div>
  )
}

export default Navbar