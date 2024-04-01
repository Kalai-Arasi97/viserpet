import React from 'react'
import client4 from "../../../Asset/client1.png"
import client3 from "../../../Asset/client3.png"
import client1 from "../../../Asset/client4.png"
import "./Marquee.css"
const Marquee = () => {
  return (
    <div>
      <div class="div12cont">
            <div class="div12">
                <marquee behavior="" direction="">
                    <div class="div121">
                        <div class="div121img">
                            <img className='client4' src={client4}/>
                        </div>
                        <div class="div121img">
                            <img className='client3' src={client3}/>
                        </div>
                        <div class="div121img">
                            <img className='client1' src={client1}/>
                        </div>
                        <div class="div121img">
                            <img className='client4' src={client4}/>
                        </div>
                        <div class="div121img">
                            <img className='client3' src={client3}/>
                        </div>
                        <div class="div121img">
                            <img className='client1' src={client1}/>
                        </div>
                        <div class="div121img">
                            <img className='client4' src={client4}/>
                        </div>
                        <div class="div121img">
                            <img className='client3' src={client3}/>
                        </div>
                        <div class="div121img">
                            <img className='client1' src={client1}/>
                        </div>
                    </div>
                </marquee>
            </div>
        </div>
    </div>
  )
}

export default Marquee
