import React from 'react'

import Navbar from '../Component/Navbar/Navbar'
import Content from '../Component/Home/Content/Content'
import Deals from '../Component/Home/Deals/Deals'
import Trending from '../Component/Home/Trending/Trending'
import Newarrival from '../Component/Home/Newarrival/Newarrival'
import Footer from "../Component/Footer/Footer"
import Marquee from '../Component/Home/Marquee/Marquee'
import Testimonial from '../Component/Home/Testimonial/Testimonial'
import Shipping from '../Component/Home/Shipping/Shipping'
const Main = () => {

  return (
    <div className='nav'>
      <Navbar/>
      <Content/>
      <Trending/>
      <Deals/>
      <Newarrival/>
      <Testimonial/>
      <Marquee/>
      <Shipping/>
      <Footer/>
    </div>
  )
}



export default Main








