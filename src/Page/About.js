import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import AboutFirst from '../Component/About/AboutFirst/AboutFirst'
import Testimonial from '../Component/Home/Testimonial/Testimonial'
import Marquee from '../Component/Home/Marquee/Marquee'
import Shipping from '../Component/Home/Shipping/Shipping'
import Footer from '../Component/Footer/Footer'
import AboutImages from '../Component/About/AboutImages/AboutImages'

const About = () => {
  return (
    <div>
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
