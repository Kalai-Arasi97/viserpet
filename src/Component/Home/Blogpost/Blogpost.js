import React from 'react'
import blog03 from "../../../Asset/blog03.png"
import blog01 from "../../../Asset/blog01.png"
import blog02 from "../../../Asset/blog02.png"
import "./Blogpost.css"

const Blogpost = () => {
  return (
    <div>
      <div class="div13">
            <div class="div13cont">
                <p class="special">Blog Post</p>
                <h2 class="trending">Latest news post</h2>
            </div>
        </div>
        <div class="div14">
            <div class="div141">
                <div class="div141img1">
                    <img className='latestimg' src = {blog03}/>

                    {/* <img class="latestimg" src="./Assets/Img/blog03.png" alt=""> */}
                </div>
                <div class="div141img2">
                    <img className='latestimg' src = {blog01}/>

                    {/* <img class="latestimg" src="./Assets/Img/blog01.png" alt=""> */}
                </div>
                <div class="div141img3">
                    <img className='latestimg' src = {blog02}/>

                    {/* <img class="latestimg" src="./Assets/Img/blog02.png" alt=""> */}
                </div>
            </div>
        </div>
        <div class="div15">
            <div class="div15cont">
                <div class="div151">
                    <div class="divdate1">
                        <p class="datep">18</p>
                        <p class="datep">May</p>
                    </div>
                    <div class="divdate2">
                        <p class="datep">22</p>
                        <p class="datep">May</p>
                    </div>
                    <div class="divdate3">
                        <p class="datep">29</p>
                        <p class="datep">May</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="div16">
            <div class="div16cont">
                <div class="latestname1">
                    <p class="latestp">Amet Occumsan Fringilla Molestie</p>
                    <p class="latestp1">Urna Hendrerit</p>
                </div>
                <div class="latestname2">
                    <p class="latestp">Maecenas Sed Facilisis Ipsum. Duis</p>
                    <p class="latestp1">Scelerisque Mi Magna</p>
                </div>
                <div class="latestname3">
                    <p class="latestp">Wenean Vitae Portttitor Tempor</p>
                    <p class="latestp1">Posuere Nisl</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogpost
