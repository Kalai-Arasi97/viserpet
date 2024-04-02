import React from 'react'
import about09 from "../../../Asset/about09.png"
import about10 from "../../../Asset/about10.png"
import about11 from "../../../Asset/about11.png"
import about12 from "../../../Asset/about12.png"
import "./AboutImages.css"

const AboutImages = () => {
  return (
    <div>
      <div class="aboutdiv08">
            <div class="aboutdiv081">
              <img className='aboutimg' src = {about09} alt=''/>
            </div>
            <div class="aboutdiv081">
              <img className='aboutimg' src = {about10} alt=''/>
            </div>
            <div class="aboutdiv081">
              <img className='aboutimg' src = {about11} alt=''/>
            </div>
            <div class="aboutdiv081">
              <img className='aboutimg' src = {about12} alt=''/>
            </div>
        </div>
    </div>
  )
}

export default AboutImages
