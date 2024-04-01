import React from 'react'
import breadcumbimg from "../../../Asset/breadcumbimg.png"
import { IoHome } from "react-icons/io5";
import about02 from "../../../Asset/about02 .png"
import about03 from "../../../Asset/about03.png"
import about04 from "../../../Asset/about04.png"
import about05 from "../../../Asset/about05.png"
import about06 from "../../../Asset/about06.png"
import about07 from "../../../Asset/about07.png"

// import main from "../../../Page/Main"
// import { TiTick } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";
import "./AboutFirst.css"

const AboutFirst = () => {
  return (
    <div>
      <div class="aboutdiv01">
            <div class="aboutdiv01cont">
                <img className='aboutdogbgimg' src = {breadcumbimg}/>

                {/* <img class="dogbgimg" src="../Assets/Img/breadcumb-img.png" alt="">  */}
            </div>
        </div>
        <div class="aboutdiv02">
            <h1 class="aboutheadh1">About Us</h1>
            <p class="aboutheadp"><IoHome /> Home / About Us</p>
        </div>

        <div class="aboutdiv03cont">
            <div class="aboutdiv03">
                <div class="aboutdiv03img">
                <img src = {about02}/>

                    {/* <img src="../Assets/Img/about02 .png" alt=""> */}
                </div>
                <div class="aboutdiv03txt">
                    <p class="aboutaboutp">About Us</p>
                    <p class="aboutabouth">We're Always Here For Our Customers.</p>
                    <div class="aboutdiv031">
                        <p class="abouttxtcontp">Contrary to popular belief, Lorem Ipsum is not simply random text. 
                            It has roots in a piece of classical Latin literature from making it overyears 
                            old. Richard McClintock Latin professor at Hampden-Sydney</p>
                    </div>
                    <div class="aboutdiv032">
                        <div class="aboutdiv0321">
                            <div class="aboutdiv032point1">
                            <IoIosStar className='staricon'/>

                            {/* <TiTick className='tickicon'/> */}
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p class="div032p">Deals & promotions</p>
                            </div>
                            <div class="aboutdiv032point2">
                            <IoIosStar className='staricon'/>

                            {/* <TiTick className='tickicon' /> */}
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p class="div032p">Service Agreement</p>
                            </div>
                        </div>
                        <div class="aboutdiv0322">
                            <div class="aboutdiv032point3">
                            <IoIosStar className='staricon'/>

                            {/* <TiTick className='tickicon'/> */}
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p class="div032p">Nsectetur cing elit</p>
                            </div>
                            <div class="aboutdiv032point4">
                                <IoIosStar className='staricon'/>
                                {/* <TiTick className='tickicon' /> */}
                                {/* <i class="fa-solid fa-check"></i> */}
                                <p class="aboutdiv032p">Printing and typesetting</p>
                            </div>
                        </div>
                    </div>
                    <div class="aboutdiv033">
                        <div class="aboutdiv0331">
                            <div class="aboutdiv0331img">
                                <img src = {about03}/>
                                
                                {/* <img src="../Assets/Img/about03.png" alt=""> */}
                            </div>
                            <div class="aboutdiv0331h">
                                <h4>Dianne Russell</h4>
                                <p>Customer</p>
                            </div>
                        </div>
                        <div class="aboutdiv0332">
                            <p class="aboutdiv0332txt">
                                Over
                                <span class="div0332txt-style"> 150,000+</span>
                                client all over the world. 
                            </p>
                        </div>
                    </div>
                    <div class="aboutdiv034">
                        <p class="aboutdiv0341">
                            Want to more about us?
                            <span class="aboutdiv0341-style"> <a href="/">Click here</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="aboutdiv04">
            <div class="aboutdiv041">
            <img className='aboutpetsimg' src = {about04}/>

                {/* <img class="petsimg" src="../Assets/Img/about04.png" alt=""> */}
            </div>
        </div>
        <div class="aboutdiv042">
            <p class="aboutchoosep">Choose Us</p>
            <h3 class="aboutchooseh3">Why Choose Us</h3>
        </div>
        <div class="aboutdiv05cont">
            <div class="aboutdiv05">
                <div class="aboutdiv051cont">
                    <div class="aboutdiv051">
                        <div class="aboutdiv051img">
                            <img src = {about05}/>

                            {/* <img src="../Assets/Img/about05.png" alt=""> */}
                        </div>
                        <h3>Modern Pet Toy</h3>
                        <p>Learn Content By Interacting</p>
                        <p>Anything Expert Lesson A video.</p>
                    </div>
                </div>
                <div class="aboutdiv052cont">
                    <div class="aboutdiv052">
                        <div class="aboutdiv052img">
            <img src = {about06}/>

                            {/* <img src="../Assets/Img/about06.png" alt=""> */}
                        </div>
                        <h3>Modern Pet Toy</h3>
                        <p>Healthy Pet Nutritions</p>
                        <p>Anything Expert Lesson A video.</p>
                    </div>
                </div>
                <div class="aboutdiv053cont">
                    <div class="aboutdiv053">
                        <div class="aboutdiv052img">
            <img src = {about07}/>

                            {/* <img src="../Assets/Img/about07.png" alt=""> */}
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
