import React from 'react'
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="logo-container">
          <h2 id="logo">pinch <span id='of'>of</span> yum</h2>
        </div>
        <BrowserRouter>
          <nav id='nav-menu'>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
                <NavLink to="/starthere" className="nav-link">Start Here</NavLink>

                <i id='search' class="fa-solid fa-search"></i>
                
            </nav>
            <Routes>
                {/* to be continued */}
            </Routes>
        </BrowserRouter>
        
        
      </div>
    </>
  )
}

export default Navbar
