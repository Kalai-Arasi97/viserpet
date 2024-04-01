import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import BlogFirst from '../Component/Blog/BlogFirst/BlogFirst'
import BlogContent from '../Component/Blog/BlogContent/BlogContent'
import Shipping from '../Component/Home/Shipping/Shipping'
import Footer from '../Component/Footer/Footer'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogFirst/>
      <BlogContent/>
      <Shipping/>
      <Footer/>
    </div>
  )
}

export default Blog
