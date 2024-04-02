import React from 'react'
import breadcumbimg from "../../../Asset/breadcumbimg.png"
import { IoHome } from "react-icons/io5";
import about02 from "../../../Asset/about02 .png"
import about03 from "../../../Asset/about03.png"
import about04 from "../../../Asset/about04.png"
import about05 from "../../../Asset/about05.png"
import about06 from "../../../Asset/about06.png"
import about07 from "../../../Asset/about07.png"
import { IoIosStar } from "react-icons/io";
import "./AboutFirst.css"

const AboutFirst = () => {
  return (
    <div>
      <div className="aboutdiv01">
            <div className="aboutdiv01cont">
                <img className='aboutdogbgimg' src = {breadcumbimg} alt=''/>
            </div>
        </div>
        <div className="aboutdiv02">
            <h1 className="aboutheadh1">About Us</h1>
            <p className="aboutheadp"><IoHome /> Home / About Us</p>
        </div>

        <div className="aboutdiv03cont">
            <div className="aboutdiv03">
                <div className="aboutdiv03img">
                    <img src = {about02} alt=''/>
                </div>
                <div className="aboutdiv03txt">
                    <p className="aboutaboutp">About Us</p>
                    <p className="aboutabouth">We're Always Here For Our Customers.</p>
                    <div className="aboutdiv031">
                        <p className="abouttxtcontp">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from making it overyears 
                            old. Richard McClintock Latin professor at Hampden-Sydney</p>
                    </div>
                    <div className="aboutdiv032">
                        <div className="aboutdiv0321">
                            <div className="aboutdiv032point1">
                            <IoIosStar className='staricon'/>
                                <p className="div032p">Deals & promotions</p>
                            </div>
                            <div className="aboutdiv032point2">
                            <IoIosStar className='staricon'/>
                                <p className="div032p">Service Agreement</p>
                            </div>
                        </div>
                        <div className="aboutdiv0322">
                            <div className="aboutdiv032point3">
                            <IoIosStar className='staricon'/>
                                <p className="div032p">Nsectetur cing elit</p>
                            </div>
                            <div className="aboutdiv032point4">
                                <IoIosStar className='staricon'/>
                                <p className="aboutdiv032p">Printing and typesetting</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutdiv033">
                        <div className="aboutdiv0331">
                            <div className="aboutdiv0331img">
                                <img src = {about03} alt=''/>
                            </div>
                            <div className="aboutdiv0331h">
                                <h4>Dianne Russell</h4>
                                <p>Customer</p>
                            </div>
                        </div>
                        <div className="aboutdiv0332">
                            <p className="aboutdiv0332txt">
                                Over
                                <span className="div0332txt-style"> 150,000+</span>
                                client all over the world. 
                            </p>
                        </div>
                    </div>
                    <div className="aboutdiv034">
                        <p className="aboutdiv0341">
                            Want to more about us?
                            <span className="aboutdiv0341-style"> <a href="/">Click here</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="aboutdiv04">
            <div className="aboutdiv041">
              <img className='aboutpetsimg' src = {about04} alt=''/>
            </div>
        </div>
        <div className="aboutdiv042">
            <p className="aboutchoosep">Choose Us</p>
            <h3 className="aboutchooseh3">Why Choose Us</h3>
        </div>
        <div className="aboutdiv05cont">
            <div className="aboutdiv05">
                <div className="aboutdiv051cont">
                    <div className="aboutdiv051">
                        <div className="aboutdiv051img">
                            <img src = {about05} alt=''/>
                        </div>
                        <h3>Modern Pet Toy</h3>
                        <p>Learn Content By Interacting</p>
                        <p>Anything Expert Lesson A video.</p>
                    </div>
                </div>
                <div className="aboutdiv052cont">
                    <div className="aboutdiv052">
                        <div className="aboutdiv052img">
                            <img src = {about06} alt=''/>
                        </div>
                        <h3>Modern Pet Toy</h3>
                        <p>Healthy Pet Nutritions</p>
                        <p>Anything Expert Lesson A video.</p>
                    </div>
                </div>
                <div className="aboutdiv053cont">
                    <div className="aboutdiv053">
                        <div className="aboutdiv052img">
                            <img src = {about07} alt=''/>
                        </div>
                        <h3>Quality and safety</h3>
                        <p>Healthy Pet Nutritions</p>
                        <p>Anything Expert Lesson A video.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default AboutFirst
