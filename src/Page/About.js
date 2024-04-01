import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import AboutFirst from '../Component/About/AboutFirst/AboutFirst'
import Testimonial from '../Component/Home/Testimonial/Testimonial'
import Marquee from '../Component/Home/Marquee/Marquee'
import Shipping from '../Component/Home/Shipping/Shipping'
import Footer from '../Component/Footer/Footer'
import AboutImages from '../Component/About/AboutImages/AboutImages'
// import AboutImages from '../Component/About/AboutImages/AboutImages'


// import Pages from '../Component/Navbar/Pages/Pages'
// import Shop from '../Component/Navbar/Shop/Shop'
// import Newarrivals from '../Component/Navbar/Newarrivals/Newarrivals'
// import Contact from '../Component/Navbar/Contact/Contact'

const About = () => {
  return (
    <div>
        {/* <h1>About</h1> */}
        <Navbar/>
        <AboutFirst/>
        <Testimonial/>
        <Marquee/>
        <AboutImages/>
        <Shipping/>
        <Footer/>
       
     
    </div>
  )
}

export default About
