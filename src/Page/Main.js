import React, { useState } from 'react'

import Navbar from '../Component/Navbar/Navbar'
// import Content from '../Component/Content/Content'
import Content from '../Component/Home/Content/Content'
import Deals from '../Component/Home/Deals/Deals'
// import Card from '../Component/Reusable/Card/Card'
import Trending from '../Component/Home/Trending/Trending'
import Newarrival from '../Component/Home/Newarrival/Newarrival'
import Footer from "../Component/Footer/Footer"
import Marquee from '../Component/Home/Marquee/Marquee'
// import Blogpost from '../Component/Home/Blogpost/Blogpost'
import Testimonial from '../Component/Home/Testimonial/Testimonial'
import Shipping from '../Component/Home/Shipping/Shipping'
// import Footer from "../Component/Footer/Footer"
const Main = () => {

  // const navigate = useNavigate()
  // const [logout, setLogout] = React. useState(false)
  // React.useEffect(() =>{
  //   if(!localStorage.getItem('auth')) navigate('/login')
  // },[logout])

  // const logoutHandler = e =>{
  //     e.preventDefault();
  //     localStorage.removeItem('auth') 
  //     setLogout(true)
  // }
  return (
    <div className='nav'>
      {/* <p>
        <button onClick={logoutHandler}>Logout</button>
        </p> */}
      {/* <Card/> */}
      <Navbar/>
      <Content/>
      {/* <Card/> */}
      <Trending/>
      <Deals/>
      <Newarrival/>
      <Testimonial/>
      <Marquee/>
      <Shipping/>
      <Footer/>
      {/* <Footer/> */}

    </div>
  )
}



export default Main








