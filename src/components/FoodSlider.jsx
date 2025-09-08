import React from 'react'
import './FoodSlider.css'
import { BrowserRouter, NavLink, Routes } from 'react-router-dom'
const FoodSlider = (props) => {
  return (
    <div id='slider-card'>
      <BrowserRouter>
        <nav>
          <NavLink id="slider-nav" to="#">
            <img src={props.src} />
            <span>play</span>
            <h2>{props.name}</h2>
          </NavLink>
        </nav>
        <Routes>
          {/* to be added later */}
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default FoodSlider
