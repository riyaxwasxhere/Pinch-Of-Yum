import React from 'react'
import Post from './Post'
import './Latest.css'
const Latest = () => {
  return (
    <>
      <div id='post-wrapper'>
        <h3 id='latest-heading'>The latest & greatest</h3>

        <Post src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Single-Serve-Cottage-Cheese-Pancake.jpg" date="September 5, 2025" heading="Single Serve Cottage Cheese Pancake" description="A cottage cheese pancake with a souffle-like texture with a golden, buttery edge and fluffy rich insides. SO GOOD. And 15 grams of protein, too!" />

        <div className="post-separator"></div>

        <Post src="https://pinchofyum.com/cdn-cgi/image/width=360,hei…op/wp-content/uploads/Instant-Pot-Spaghetti-4.jpg" date="July 31, 2025" heading="Instant Pot Spaghetti" description="My whole family loves this Instant Pot Spaghetti! Silky, flavorful, and delightfully clingy. Easy enough for my kids to make it too!" />

        <div className="post-separator"></div>

        <Post src="https://pinchofyum.com/cdn-cgi/image/width=360,height=360,fit=crop/wp-content/uploads/Chocolate-Cherry-Smoothie-1.jpg" date="July 23, 2025" heading="Chocolate Cherry Smoothie" description="Chocolate Cherry Smoothie every day, please! Packed with protein and so delightfully silky and smooth." />

        <div className="post-separator"></div>

        <div id="more-posts">
          <button>View More recent posts</button>
        </div>
      </div>
    </>
  )
}

export default Latest
