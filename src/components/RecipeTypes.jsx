import React from 'react'
import './RecipeTypes.css'
const RecipeTypes = (props) => {
  return (
    <div id='rec-types'>
      <a href="#">
        <img src={props.src} />
        <h3>{props.name}</h3>
      </a>
    </div>
  )
}

export default RecipeTypes
