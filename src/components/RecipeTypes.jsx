import React from 'react'
import './RecipeTypes.css'
import { BrowserRouter, NavLink, Routes } from 'react-router-dom'
const RecipeTypes = (props) => {
  return (
    <div id='rec-types'>
      <BrowserRouter>
        <nav>
          <NavLink id='rec-nav' to="#">
            <img src={props.src} />
            <h3>{props.name}</h3>
          </NavLink>
        </nav>
        <Routes>
          {/* to be added later */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RecipeTypes
