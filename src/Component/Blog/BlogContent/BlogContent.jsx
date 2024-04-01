import React from 'react'
import blog from "../../../Asset/blog.jpg"
import blog04 from "../../../Asset/blog04.png"
import blog05 from "../../../Asset/blog05.png"
import blog06 from "../../../Asset/blog06.png"
import blog07 from "../../../Asset/blog07.png"
import blog08 from "../../../Asset/blog08.png"
import blog09 from "../../../Asset/blog09.png"
import blog10 from "../../../Asset/blog10.png"
import blog11 from "../../../Asset/blog11.png"
import blog12 from "../../../Asset/blog12.png"
import blog14 from "../../../Asset/blog14.png"
import blog15 from "../../../Asset/blog15.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./BlogContent.css"


const BlogContent = () => {
  return (
    <div>
          <div class="blogdivmaincontent">
        <div class="blogdivleftright">
            <div class="blogdivleft">
                <div class="blogdivl01">
                    <input type="text"  placeholder="Email Address" />
                </div>
                <div class="blogdivl02">
                    <p class="bloglefthead">Category</p>
                    <p class="blogline"></p>
                    <p class="blogcate">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Cat Food (5)</a>
                    </p>
                    <p class="blogcate">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Accessories (20)</a>
                    </p>
                    <p class="blogcate">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Pet Training (18)</a>
                    </p>
                    <p class="blogcate">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Veterinary (02)</a>
                    </p>
                </div>
                <div class="blogdivl03">
                    <p class="bloglefthead">Popular Post</p>
                    <p class="blogline"></p> 
                    <div class="blogdivpoppost01">
                        <div class="blogdivppimg">
                            <img  src = {blog04}/>
                        </div>
                        <div class="blogdivpptxt">
                            <h5 class="blogdivpptxth">Analysing Potential Problem</h5>
                            <p class="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div>
                    <div class="blogdivpoppost02">
                        <div class="blogdivppimg">
                            <img  src = {blog05}/>
                        </div>
                        <div class="blogdivpptxt">
                            <h5 class="blogdivpptxth">Wherefore always free from repetiti</h5>
                            <p class="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div> 
                    <div class="blogdivpoppost03">
                        <div class="blogdivppimg">
                            <img  src = {blog06}/>

                            {/* <img src="../Assets/Img/blog06.png" alt=""> */}
                        </div>
                        <div class="blogdivpptxt">
                            <h5 class="blogdivpptxth">Eum soluta nobis gendi cumque</h5>
                            <p class="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div>                  
                </div>
                <div class="blogdivl04">
                    <p class="bloglefthead">Archives</p>
                    <p class="blogline"></p>
                    <p class="blogarch">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">May 2000</a>
                    </p>
                    <p class="blogarch">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">June 2008</a>
                    </p>
                    <p class="blogarch">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">August 2010</a>
                    </p>
                    <p class="blogarch">
                        <i class="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">December 2021</a>
                    </p>
                </div>
                <div class="blogdivl05">
                    <p class="bloglefthead">Tags</p>
                    <p class="blogline"></p>
                    <div class="blogdiv05tag1">
                        <a href=""><p class="blogtag1">Baber</p></a>
                        <a href=""><p class="blogtag2">Food</p></a>
                        <a href=""><p class="blogtag3">Cat</p></a>
                    </div>
                    <div class="div05tag2">
                        <a href=""><p class="blogtag4">Dog Food</p></a>
                        {/* <a href=""><p class="blogtag5">Cat</p></a> */}
                    </div>
                </div>
                <div class="blogdivl06">
                    <p class="bloglefthead">Instagram</p>
                    <p class="blogline"></p>
                    <div class="blogdiv06imgs">
            <img  src = {blog06}/>
            <img  src = {blog07}/>
            <img  src = {blog08}/>
            <img  src = {blog09}/>
            <img  src = {blog10}/>
            <img  src = {blog11}/>

                        {/* <img src="../Assets/Img/blog06.png" alt="">
                        <img src="../Assets/Img/blog07.png" alt="">
                        <img src="../Assets/Img/blog08.png" alt="">
                        <img src="../Assets/Img/blog09.png" alt="">
                        <img src="../Assets/Img/blog10.png" alt="">
                        <img src="../Assets/Img/blog11.png" alt=""> */}
                    </div>
                </div>
            </div>
            <div class="blogdivright">
                <div class="blogdivr01">
                    <a href="https://youtu.be/Pw1oo5xZYAI?si=Vm0s2fhFiKEIEu0M">
                    <img className='blogdivrimg1' src = {blog}/>

                    {/* <img class="divrimg1" src="../Assets/Img/13blog.jpg" alt=""> */}
                    </a>
                    <h2 class="blogdivrh2">Your Dog Incredible Sense of Hearing</h2>
                    <p class="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p class="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div class="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>
                        {/* <i class="fa-brands fa-facebook-f"></i> */}
                        {/* <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i> */}
                    </div>
                </div>
                <div class="blogdivr02">
                    <img className='blogdivrimg' src = {blog12}/>

                    {/* <img class="divrimg" src="../Assets/Img/blog12.png" alt=""> */}
                    
                    <h2 class="blogdivrh2">Training For Pets To Behave Like</h2>
                    <p class="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p class="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div class="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>

                        {/* <i class="fa-brands fa-facebook-f"></i> */}
                        {/* <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i> */}
                    </div>   
                </div>
                <div class="blogdivr03">
                    <img className='blogdivrimg' src = {blog14}/>

                    {/* <img class="divrimg" src="../Assets/Img/blog14.png" alt=""> */}
                    <h2 class="blogdivrh2">A Discount Cartridge Is Better Ever </h2>
                    <p class="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p class="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div class="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>

                        {/* <i class="fa-brands fa-facebook-f"></i> */}
                        {/* <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i> */}
                    </div>
                </div>
                <div class="blogdivr04">
                    <img className='blogdivrimg' src = {blog15}/>

                    {/* <img class="divrimg" src="../Assets/Img/blog15.png" alt=""> */}
                    <h2 class="blogdivrh2">Work Hard & Gain Success</h2>
                    <p class="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p class="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div class="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>

                        {/* <i class="fa-brands fa-facebook-f"></i> */}
                        {/* <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i> */}
                    </div>
                </div>
                <div class="blogdivr05">
                    <p class="blogdivr05p">01</p>
                    <p class="blogdivr05p">02</p>
                    <p class="blogdivr05p">03</p>
                    <i class="fa-sharp fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogContent
