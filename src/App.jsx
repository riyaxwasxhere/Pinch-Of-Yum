import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Latest from './components/Latest';
import Aside from './components/Aside';
import Scroller from './components/Scroller';
import CategoryItems from './components/CategoryItems';
import Social from './components/Social';
import Inbox from './components/Inbox';

const App = () => {

  return (
    <div id='main-container'>
      <Inbox/>

      <header>
        <Navbar/>
      </header>

      <div class="separator"></div>

      <article id='main'>
        <section id='top-section'>
            <h1>Simple recipes made for <span> real, actual, everyday life.</span></h1>
        </section>
        
        <section id='hero'>
          <Hero/>
        </section>
      </article>

      <article>
        <section id='scroller'>
          <div id="seen-in">
            <h3>as seen in</h3>
          </div>
          <Scroller/>
        </section>
      </article>

      <div class="separator"></div>

      <article id='posts'>
        <section id='latest'>
          <Latest/>
        </section>
        <aside id='aside'>
          <Aside/>
        </aside>
      </article>
      
      <article>
        <section id='about-section'>
          <div id="txt-about">
            <h3>Hi! I'm Lindsay.</h3>
            <h4>nice to meet you</h4>
            <p>I'm a former 4th grade teacher, now full time blogger. My husband Bjork and I live in Minnesota. Favorite things include my camera, lake days, and dark chocolate.</p>
            <button>learn more</button>
          </div>

          <div class="img-about">
            <img src="https://pinchofyum.com/wp-content/assets/images/home-lindsay-kitchen.jpg" />
          </div>
          
          <div class="img-about">
            <img src="	https://pinchofyum.com/wp-content/assets/images/home-lindsay-pour.jpg" />
          </div>
        </section>
      </article>

      <article id='connect'>
        <section id="follow">
            <h3>Follow us</h3>
            <Social/>
        </section>
          
        <section id="email-updates">
            <div id="for-email">
              <h2><span>signup</span> For email updates</h2>
            </div>

            <form>
              <div id="name-input" className='e-input'>
                <input type="text" placeholder='First Name'/>
              </div>
              <div id="email-input" className='e-input'>
                <input type="email" placeholder='Email'/>
              </div>
              <button id='go-btn'>Go</button>
            </form>
        </section>
      </article> 

      <article id='categories'>
          <div id="c-wrapper">
            <div className="c-options">
              <h3>Vegetetarian</h3>
            </div>
            <div className="c-options">
              <h3>quick + easy</h3>
            </div>
            <div className="c-options">
              <h3>popular on pinterest</h3>
            </div>
          </div>
          <section id='c-items'>
            <CategoryItems src="https://pinchofyum.com/wp-content/uploads/Marry-Me-Orzo-400x400.jpg" type="recipes" name="Marry Me Chickpeas and Orzo" />
            <CategoryItems src="https://pinchofyum.com/wp-content/uploads/Smashed-Potato-Salad-2-400x400.jpg" type="salads" name="Crispy Smashed Potato Salad" />
            <CategoryItems src="https://pinchofyum.com/wp-content/uploads/Buffalo-Tofu-2-400x400.jpg" type="air fryer" name="Crispy Buffalo Tofu with Caesar Salad" />
            <CategoryItems src="https://pinchofyum.com/wp-content/uploads/Roasted-Red-Pepper-Pasta-400x400.jpg" type="pasta" name="Roasted Red Pepper Pasta" />
          </section>
      </article>

      <article id='cookbook'>
          <section id="cookbook-img">
            <img src="https://pinchofyum.com/wp-content/assets/images/cta/poy-ecookbook-2021.png" />
          </section>
          <section id="cookbook-details">
            <h2>get it now</h2>
            <h3>pinch of yum cookbook</h3>
            <p>The eBook includes our most popular 25 recipes in a beautiful, easy to download format. Enter your email and we'll send it right over!</p>
            <div id="cookbook-form">
              <input type="text" placeholder='First Name' />
              <input type="email" placeholder='Email' />
              <button>go</button>
            </div>
          </section>
      </article>
      

      <footer id='main-footer'>
        <section id='upper-footer'>
          <div id="f-part1">
            
            <div id="pinch-of-yum">
              <h3>Pinch Of Yum</h3>
              <ul>
                <li>About</li>
                <li>Blog</li>
                <li>Recipe Index</li>
                <li>Blogging Resources</li>
                <li>Income Reports</li>
                <li>Sponsored Content</li>
                <li>Media Mentions</li>
                <li>Contact</li>
              </ul>
            </div>
            <div id="food-and-rec">
              <h3>Food & Recipes</h3>
              <ul>
                <li>Sugar Free January</li>
                <li>Freezer Meals 101</li>
                <li>Quick and Easy Recipes</li>
                <li>Instant Pot Recipes</li>
                <li>Pasta Recipes</li>
                <li>Vegan Recipes</li>
                <li>Soup Recipes</li>
                <li>Taco Recipes</li>
                <li>Meal Prep Recipes</li>
              </ul>
            </div>
          </div>

          <div id="f-part2">
            <div id="email-updates">
              <h3><span>Signup</span> for email updates</h3>

              <h4>Get a Free Cookbook with our top 25 recipes.</h4>
              
              <div id="email-form">
                <input type="text" placeholder='First Name'/>
                <input type="email" placeholder='Email'/>
                <button>Go</button>
              </div>
            </div>

            <div id="other-brands">
              <p>our other brands</p>
              <div id="brands">
                <img id='b-img1' src="https://pinchofyum.com/wp-content/assets/images/food-blogger-pro-logo.png" />
                <img id='b-img2' src="https://pinchofyum.com/wp-content/assets/images/clariti-logo.svg" />
              </div>
            </div>
          </div>
        </section>

        <section id='lower-footer'>
          <div id="f-socials">
            <Social/>
          </div>
          
          <div id="last">
            <div id="logo2-container">
              <h2 id='logo2'>pinch <span id='of2'>of</span> yum</h2>
            </div>
            <div id="rights">
              <p>© 2025 Pinch of Yum. All Rights Reserved.</p>
              <p>A Raptive Partner Site.</p>
            </div>
          </div>
        </section>

        <div id="term-and-policy">
          <p>Privacy Policy</p>
          <p>Terms</p>
        </div>
      </footer>
    </div>
  )
}

export default App
