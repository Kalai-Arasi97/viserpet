import React from 'react';
import breadcumbimg from "../../../Asset/breadcumbimg.png";
import { IoHome } from "react-icons/io5";
import "./FirstDiv.css";

const FirstDiv = () => {
  return (
    <div>
      <div className="contactdiv01">
            <div className="contactdiv01cont">
              <img className='contactdogbgimg' src = {breadcumbimg} alt=''/>
            </div>
        </div>
        <div className="contactdiv02">
            <h1 className="contactheadh1">Contact Us</h1>
            <p className="contactheadp"><IoHome /> Home / Contact Us</p>
        </div>
    </div>
  );
}

export default FirstDiv;
