import React from 'react'
import breadcumbimg from "../../../Asset/breadcumbimg.png"
import f04 from "../../../Asset/f04.png"
import f03 from "../../../Asset/f03.png"
import f02 from "../../../Asset/f02.png"
import f01 from "../../../Asset/f01.png"
import "./Shipping.css"

const Shipping = () => {
  return (
    <div>
        <div className="div17">
            <div className="div17cont">
                <img className='dogbgimg' src = {breadcumbimg} alt=''/>
            </div>
        </div>
        <div className="div18">
            <div className="div18cont">
                <div className="div181">
                    <img className='div18img' src = {f04} alt=''/>
                    <h5 className="div18head">FREE SHIPPING</h5>
                    <p className="div18p">For all order over $99</p>
                </div>
                <div className="div182">
                    <img className='div18img' src = {f03} alt=''/>
                    <h5 className="div18head">FRIENDLY SUPPORT</h5>
                    <p className="div18p">24/7 Customer Support</p>
                </div>
                <div className="div183">
                    <img className='div18img' src = {f02} alt=''/>
                    <h5 className="div18head">SECURE PAYMENT</h5>
                    <p className="div18p">100% Secure Payment</p>
                </div>
                <div className="div184">
                    <img className='div18img' src = {f01} alt=''/>
                    <h5 className="div18head">SHIPPING & RETURN</h5>
                    <p className="div18p">Within 30days For Refund</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shipping
