import React from 'react'
import './FoodSlider.css'
const FoodSlider = (props) => {
  return (
    <div id='slider-card'>
      <a href="#">
        <img src={props.src} />
        <span>play</span>
        <h2>{props.name}</h2>
      </a>
    </div>
  )
}

export default FoodSlider
