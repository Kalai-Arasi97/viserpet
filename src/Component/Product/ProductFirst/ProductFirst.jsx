import React from 'react'
import { IoHome } from "react-icons/io5";
import breadcumbimg from "../../../Asset/breadcumbimg.png";
import "./ProductFirst.css"

const ProductFirst = () => {
  return (
    <div>
       <div className="productdiv01">
            <div className="productdiv01cont">
              <img className='productdogbgimg' src = {breadcumbimg} alt=''/>
            </div>
        </div>
        <div className="productdiv02">
            <h1 className="productheadh1">Product</h1>
            <p className="productheadp"><IoHome /> Home / Product</p>
        </div>
    </div>
  )
}

export default ProductFirst
