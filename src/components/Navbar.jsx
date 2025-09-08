import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const [search, setSearch] = useState(false)
  const handleSearch = () =>{
    search?
    setSearch(false):
    setSearch(true)
  }
  return (
    <>
      <div id="navbar">   
        <BrowserRouter>
          <NavLink to="/" className="nav-logo">
              <h2 id="logo">pinch <span id='of'>of</span> yum</h2>
          </NavLink>
       
          <nav id='nav-menu'>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/recipes" className="nav-link">Recipes</NavLink>
            <NavLink to="/starthere" className="nav-link">Start Here</NavLink>

            <i onClick={handleSearch} id='search' class="fa-solid fa-search"></i>
            <input type="text" id='searchInput' className={search? "searchInput applySearch": "searchInput"} />
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
