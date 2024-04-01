import React from 'react';
import breadcumbimg from "../../../Asset/breadcumbimg.png";
import { IoHome } from "react-icons/io5";
import "./FirstDiv.css";

const FirstDiv = () => {
  return (
    <div>
      <div class="contactdiv01">
            <div class="contactdiv01cont">
            <img className='contactdogbgimg' src = {breadcumbimg}/>

                {/* <img class="dogbgimg" src="../Assets/Img/breadcumb-img.png" alt="">  */}
            </div>
        </div>
        <div class="contactdiv02">
            <h1 class="contactheadh1">Contact Us</h1>
            <p class="contactheadp"><IoHome /> Home / Contact Us</p>
        </div>
    </div>
  );
}

export default FirstDiv;
