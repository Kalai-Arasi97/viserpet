import React from 'react'
import blog03 from "../../../Asset/blog03.png"
import blog01 from "../../../Asset/blog01.png"
import blog02 from "../../../Asset/blog02.png"
import "./Blogpost.css"

const Blogpost = () => {
  return (
    <div>
      <div className="div13">
            <div className="div13cont">
                <p className="special">Blog Post</p>
                <h2 className="trending">Latest news post</h2>
            </div>
        </div>
        <div className="div14">
            <div className="div141">
                <div className="div141img1">
                    <img className='latestimg' src = {blog03} alt=''/>
                </div>
                <div className="div141img2">
                    <img className='latestimg' src = {blog01} alt=''/>
                </div>
                <div className="div141img3">
                    <img className='latestimg' src = {blog02} alt=''/>
                </div>
            </div>
        </div>
        <div className="div15">
            <div className="div15cont">
                <div className="div151">
                    <div className="divdate1">
                        <p className="datep">18</p>
                        <p className="datep">May</p>
                    </div>
                    <div className="divdate2">
                        <p className="datep">22</p>
                        <p className="datep">May</p>
                    </div>
                    <div className="divdate3">
                        <p className="datep">29</p>
                        <p className="datep">May</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="div16">
            <div className="div16cont">
                <div className="latestname1">
                    <p className="latestp">Amet Occumsan Fringilla Molestie</p>
                    <p className="latestp1">Urna Hendrerit</p>
                </div>
                <div className="latestname2">
                    <p className="latestp">Maecenas Sed Facilisis Ipsum. Duis</p>
                    <p className="latestp1">Scelerisque Mi Magna</p>
                </div>
                <div className="latestname3">
                    <p className="latestp">Wenean Vitae Portttitor Tempor</p>
                    <p className="latestp1">Posuere Nisl</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogpost
