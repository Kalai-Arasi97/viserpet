import React from 'react'
import ticon from '../../../Asset/ticon.png'
import "./Testimonial.css"

const Testimonial = () => {
  return (
    <div>
      <div className="divtestimonial">
        <div className="div111">
            <div className="div111img">

            </div>
            <div className="div111cont">
                <img className='doublequotes' src = {ticon}/>

            {/* <img class="doublequotes" src ={testimonial} alt=""> */}
                <p class="customerquotes">A great about us block helps builds trubetween
                you customers. The more content you
                provide you and your business</p> 
                <h4 class="customername">Dianne russell</h4>
                <p class="customerp">Customer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
