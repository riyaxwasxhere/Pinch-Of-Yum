import React from 'react'
import './FoodTypes.css'

const FoodTypes = (props) => {
  return (
    <div id='food-card'>
      <a href="#">
        <img id='p-img' src={props.source} alt={`${props.name}-img`} />
        <p id='p-name'>{props.name}</p>
      </a>
    </div>
  )
}

export default FoodTypes
