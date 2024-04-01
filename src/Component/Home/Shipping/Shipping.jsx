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
        <div class="div17">
            <div class="div17cont">
                <img className='dogbgimg' src = {breadcumbimg}/>
            </div>
        </div>
        <div class="div18">
            <div class="div18cont">
                <div class="div181">
                    <img className='div18img' src = {f04}/>
                    <h5 class="div18head">FREE SHIPPING</h5>
                    <p class="div18p">For all order over $99</p>
                </div>
                <div class="div182">
                    <img className='div18img' src = {f03}/>

                    <h5 class="div18head">FRIENDLY SUPPORT</h5>
                    <p class="div18p">24/7 Customer Support</p>
                </div>
                <div class="div183">
                    <img className='div18img' src = {f02}/>

                    <h5 class="div18head">SECURE PAYMENT</h5>
                    <p class="div18p">100% Secure Payment</p>
                </div>
                <div class="div184">
                    <img className='div18img' src = {f01}/>

                    <h5 class="div18head">SHIPPING & RETURN</h5>
                    <p class="div18p">Within 30days For Refund</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shipping
