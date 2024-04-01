import React from 'react'
import breadcumbimg from "../../../Asset/breadcumbimg.png"
import { IoHome } from "react-icons/io5";

import "./BlogFirst.css"
const BlogFirst = () => {
  return (
    <div>
      <div class="blogdiv01">
        <div class="blogdiv01cont">
        <img className='blogdogbgimg'  src = {breadcumbimg}/>

            {/* <img class="blogdogbgimg" src="../Assets/Img/breadcumb-img.png" alt="">  */}
        </div>
    </div>
    <div class="blogdiv02">
        <h1 class="blogheadh1">Blog Post</h1>
        <p class="blogheadp"><IoHome/>Home / Blog Post</p>
    </div>
    </div>
  )
}

export default BlogFirst
