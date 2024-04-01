import React from 'react'
import { IoHome } from "react-icons/io5";
import breadcumbimg from "../../../Asset/breadcumbimg.png";
import "./ProductFirst.css"

const ProductFirst = () => {
  return (
    <div>
       <div class="productdiv01">
            <div class="productdiv01cont">
            <img className='productdogbgimg' src = {breadcumbimg}/>

                {/* <img class="dogbgimg" src="../Assets/Img/breadcumb-img.png" alt="">  */}
            </div>
        </div>
        <div class="productdiv02">
            <h1 class="productheadh1">Product</h1>
            <p class="productheadp"><IoHome /> Home / Product</p>
        </div>
    </div>
  )
}

export default ProductFirst
