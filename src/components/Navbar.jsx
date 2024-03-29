import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
  return (
   <nav className='navbar'>
       <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Home</Link>
       </div>
       <div className='navbar-right'>
          <Link to ="/tollgate" className='navbar-link'>Toll Calculator</Link>
          <Link to ="/login" className='navbar-link'>Login</Link>
       </div>  
   </nav>
  )
}

export default Navbar
