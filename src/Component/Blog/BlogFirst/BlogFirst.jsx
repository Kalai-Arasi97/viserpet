import React from 'react'
import breadcumbimg from "../../../Asset/breadcumbimg.png"
import { IoHome } from "react-icons/io5";

import "./BlogFirst.css"
const BlogFirst = () => {
  return (
    <div>
      <div className="blogdiv01">
        <div className="blogdiv01cont">
          <img className='blogdogbgimg'  alt='' src = {breadcumbimg}/>
        </div>
    </div>
    <div className="blogdiv02">
        <h1 className="blogheadh1">Blog Post</h1>
        <p className="blogheadp"><IoHome/>Home / Blog Post</p>
    </div>
    </div>
  )
}

export default BlogFirst
