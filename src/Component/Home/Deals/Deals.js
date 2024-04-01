import React from 'react'
import "./Deals.css"
import dealimg from "../../../Asset/dealimg.png"
import dealproductimg from "../../../Asset/dealproductimg.png"
const Deals = () => {
  return (
    <div>
      <div class="div05cont">
            <div class="div05">
              <img className='dealimg' src = {dealimg}/>
              <img className='dealproductimg' src = {dealproductimg}/>
            </div>
            <div class="div051">
                <div class="div06">
                    <div class="div061">
                        <p class="div061best">Best Products</p>
                        <h1>Best Deals Of The Week!</h1>
                        <div class="div0611">
                            <div class="countdown">
                                <p class="count">335 Days</p>
                            </div>
                            <div class="countdown">
                                <p class="count">17 Hours</p>
                            </div>
                            <div class="countdown">
                                <p class="count">12 Minutes</p>
                            </div>
                            <div class="countdown">
                                <p class="count">10 Seconds</p>
                            </div>
                        </div>
                        <p class="dummy">Dummy Product Name</p>
                        <div class="div06price">
                            <div class="blk">
                                <p>$620</p>
                            </div>
                            <div class="brown">
                                <p>$520</p>
                            </div>
                        </div>
                        <button class="shopnow1">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="div07">
            <div class="div071">
                <p class="special">Special Products</p>
                <h2 class="trending">New Arrivals Product</h2>
            </div>
        </div>
        <div class="div08cont">
            <div class="div08">
                <p class="all">All</p>
                <p class="div08p">Cat</p>
                <p class="div08p">Dog</p>
                <p class="smallpet">Small Pet</p>
            </div>
        </div>
    </div>
  )
}

export default Deals
