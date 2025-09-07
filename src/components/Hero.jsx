import React from 'react'
import FoodTypes from './FoodTypes'
import './Hero.css'
import FoodSlider from './FoodSlider'
import Slider from "react-slick";
import RecipeTypes from './RecipeTypes';

const Hero = () => {
    var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrow: true,
  };

  return (
    <div id='hero-section'>
      <div id="food-options">
        <FoodTypes source="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Roasted-Red-Pepper-Pasta.jpg" name="Pasta"/>
        <FoodTypes source="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Toss-Pasta-Salad-Bowl.jpg" name="salads"/>
        <FoodTypes source="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Ginger-Peanut-Chicken-1.jpg" name="most popular"/>
        <FoodTypes source="https://pinchofyum.com/cdn-cgi/image/width=360,height=514,fit=crop/wp-content/uploads/Teriyaki-Burgers-9.jpg" name="quick and easy"/>
      </div>
      <div id="favourite">
        <h2>
          <span>watch </span> My favourite recipes
        </h2>
      </div>

      <div id="img-slider">
        <Slider {...settings}>
          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-14-at-111339-am-69771752509633937.png?t=1752509661000" name="Crispy Smashed Potato Salad"/>
          
          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-08-at-14021-pm-17451752000053470.png?t=1752000080000" name="Chopped Thai-Inspired Chicken Salad"/>
          
          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113847-am-41071751560739101.png?t=1751560754000" name="Two Huge Chocolate Chip Cookies"/>
          
          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-113202-am-18481751560331383.png?t=1751560438000" name="Ricotta Meatballs with Crispy Topping"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-112156-am-71761751559893191.png?t=1751559932000" name="Chicken Bowls with Cilantro Pesto"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-03-at-111050-am-102751751559363814.png?t=1751559381000" name="Spicy Peanut Soup"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-07-02-at-40413-pm-92481751558300237.png?t=1751559447000" name="Crispy Rice Salad"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-06-16-at-32319-pm-35081750105407179.png?t=1750105418000" name="Steph's Chickpea Curry"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-06-16-at-32124-pm-56701750105315326.png?t=1750105333000" name="Chicken Wontons in Spicy Chilli Sauce"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-06-16-at-32020-pm-106681750105228266.png?t=1750105241000" name="Meal Prep Breakfast Sandwiches"/>

          <FoodSlider src="https://cdn.storifyme.xyz/accounts/pinchofyum-2302815/assets/696x928/480x/f-screenshot-2025-06-16-at-24840-pm-15711750103329447.png?t=1750103349000" name="Sheet Pan Chicken Pitas"/>
        </Slider>
      </div>

      <div id="recipe-types">
        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Teriyaki-Burgers-9-183x183.jpg" name="Quick and easy" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Bang-Bang-Salmon-with-Rice-and-Cucumber-183x183.jpg" name="dinner" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Cauliflower-Black-Bean-Tostadas-4-183x183.jpg" name="vegetarian" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/cropped-Cashew-Crunch-Salad-3-183x183.jpg" name="healthy" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Chicken-Tinga-Tacos-5-183x183.jpg" name="instant pot" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Meal-Prep-Pasta-with-Cauliflower-183x183.jpg" name="vegan" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Family-Style-Pitas-2-183x183.jpg" name="meal prep" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Tortilla-Soup-183x183.jpg" name="soups" />

        <RecipeTypes src="https://pinchofyum.com/wp-content/uploads/Toss-Pasta-Salad-Bowl-183x183.jpg" name="salads" />
      </div>

      <div>
        <form id="form" action="">
          <label>
            <div id="input-field">
              <i id='search-rec' class='fa-solid fa-search'></i>
              <input type="text" placeholder='Search our recipes' />
            </div>
          </label>
          <p id='or'>or</p>
          <button id='view-all'><i id='plus-icon' class='fa-solid fa-plus'></i> view all recipes</button>
        </form>
      </div>
    </div>
  )
}

export default Hero
