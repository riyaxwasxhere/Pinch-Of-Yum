import React from 'react'
import './Post.css'

const Post = (props) => {
  return (
    <div id='post'>
      <div id="post-img">
        <img src={props.src} />
      </div>
      <div id="post-details">
        <h4>{props.date}</h4>
        <h1>{props.heading}</h1>
        <p>{props.description}</p>
        <h3>continue reading</h3>
      </div>
    </div>
  )
}

export default Post
