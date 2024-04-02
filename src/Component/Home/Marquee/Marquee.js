import React from 'react'
import client4 from "../../../Asset/client1.png"
import client3 from "../../../Asset/client3.png"
import client1 from "../../../Asset/client4.png"
import "./Marquee.css"
const Marquee = () => {
  return (
    <div>
      <div className="div12cont">
        <div className="div12">
            <div className="marquee-container">
                <div className="marquee">
                    <div className="div121img">
                        <img className='client4' src={client4} alt=''/>
                    </div>
                    <div className="div121img">
                        <img className='client3' src={client3} alt=''/>
                    </div>
                    <div className="div121img">
                            <img className='client1' src={client1} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client4' src={client4} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client3' src={client3} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client1' src={client1} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client4' src={client4} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client3' src={client3} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client1' src={client1} alt=''/>
                        </div>
                    {/* Add more images as needed */}
                </div>
            </div>




                {/* <marquee behavior="" direction="">
                    <div className="div121">
                        <div className="div121img">
                            <img className='client4' src={client4} alt=''/>
                        </div>
                        <div className="div121img">
                            <img className='client3' src={client3} alt=''/>
                        </div>
                        
                    </div>
                </marquee> */}
            </div>
        </div>
    </div>
  )
}

export default Marquee
