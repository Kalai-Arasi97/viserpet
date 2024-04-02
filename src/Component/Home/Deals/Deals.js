import React from 'react'
import "./Deals.css"
import dealimg from "../../../Asset/dealimg.png"
import dealproductimg from "../../../Asset/dealproductimg.png"
const Deals = () => {
  return (
    <div>
      <div className="div05cont">
            <div className="div05">
              <img className='dealimg' src = {dealimg} alt=''/>
              <img className='dealproductimg' src = {dealproductimg} alt=''/>
            </div>
            <div className="div051">
                <div className="div06">
                    <div className="div061">
                        <p className="div061best">Best Products</p>
                        <h1>Best Deals Of The Week!</h1>
                        <div className="div0611">
                            <div className="countdown">
                                <p className="count">335 Days</p>
                            </div>
                            <div className="countdown">
                                <p className="count">17 Hours</p>
                            </div>
                            <div className="countdown">
                                <p className="count">12 Minutes</p>
                            </div>
                            <div className="countdown">
                                <p className="count">10 Seconds</p>
                            </div>
                        </div>
                        <p className="dummy">Dummy Product Name</p>
                        <div className="div06price">
                            <div className="blk">
                                <p>$620</p>
                            </div>
                            <div className="brown">
                                <p>$520</p>
                            </div>
                        </div>
                        <button className="shopnow1">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="div07">
            <div className="div071">
                <p className="special">Special Products</p>
                <h2 className="trending">New Arrivals Product</h2>
            </div>
        </div>
        <div className="div08cont">
            <div className="div08">
                <p className="all">All</p>
                <p className="div08p">Cat</p>
                <p className="div08p">Dog</p>
                <p className="smallpet">Small Pet</p>
            </div>
        </div>
    </div>
  )
}

export default Deals
