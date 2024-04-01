import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import ProductFirst from '../Component/Product/ProductFirst/ProductFirst'
import ProductContent from '../Component/Product/ProductContent/ProductContent'
import Shipping from '../Component/Home/Shipping/Shipping'
import Footer from '../Component/Footer/Footer'

const Product = () => {
  return (
    <div>
      <Navbar/>
      <ProductFirst/>
      <ProductContent/>
      <Shipping/>
      <Footer/>
    </div>
  )
}

export default Product
