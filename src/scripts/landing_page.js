import React from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom';
 
export default function Landing_page() {
  return(
  <div class="container">
  {/* <h2>Landing Page</h2> */}
  <section class="left">
  <img class="landing_page_image" src="images/landingpage.jpg" alt="landing_pages"></img>
  </section>
  <section class="right">
    <h1 class="text">Welcome! to Idream Career Assignment</h1><br/>
    <Link to="/postview" className='button'><button> Enter </button></Link>
  </section>
  </div>
  )
}