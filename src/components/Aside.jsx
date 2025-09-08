import React from 'react'
import './Aside.css'
const Aside = () => {
  return (
    <div id='aside-wrapper'>
      <div id="sidebar-img">
        <img src="https://pinchofyum.com/wp-content/assets/images/sidebar/sidebar-freezer-meals@2x.png" />
      </div>

      <div id="rec-collections">
        <div className="collection-heading">
          <h3 id='collec-heading'>Recipe collections</h3>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">1</p>
            <p className='r-collec'>Instant Pot Recipes</p>
          </div>
          <p className="num">38</p>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">2</p>
            <p className='r-collec'>Vegan Recipes</p>
          </div>
          <p className="num">199</p>
        </div>
        
        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">3</p>
            <p className='r-collec'>Meal Prep Ideas</p>
          </div>
          <p className="num">36</p>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">4</p>
            <p className='r-collec'>Quick And Easy Recipes</p>
          </div>
          <p className="num">488</p>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">5</p>
            <p className='r-collec'>Pasta Recipes</p>
          </div>
          <p className="num">175</p>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">6</p>
            <p className='r-collec'>Soup Recipes</p>
          </div>
          <p className="num">70</p>
        </div>

        <div className="collection-items">
          <div className="collec-item">
            <p className="item-index">7</p>
            <p className='r-collec'>Most Popular Recipes</p>  
          </div>
          <p className="num">89</p>
        </div>

      </div>
    </div>
  )
}

export default Aside
