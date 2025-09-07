import React from 'react'
import './CategoryItems.css'

const CategoryItems = (props) => {
  return (
    <div id='c-item'>
      <div id="c-img">
        <img src={props.src} />
        <p>{props.type}</p>
      </div>
      
      <h3>{props.name}</h3>
    </div>
  )
}

export default CategoryItems
