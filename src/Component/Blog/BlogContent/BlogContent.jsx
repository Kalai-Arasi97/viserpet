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
          <div className="blogdivmaincontent">
        <div className="blogdivleftright">
            <div className="blogdivleft">
                <div className="blogdivl01">
                    <input type="text"  placeholder="Email Address" />
                </div>
                <div className="blogdivl02">
                    <p className="bloglefthead">Category</p>
                    <p className="blogline"></p>
                    <p className="blogcate">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Cat Food (5)</a>
                    </p>
                    <p className="blogcate">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Accessories (20)</a>
                    </p>
                    <p className="blogcate">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Pet Training (18)</a>
                    </p>
                    <p className="blogcate">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">Veterinary (02)</a>
                    </p>
                </div>
                <div className="blogdivl03">
                    <p className="bloglefthead">Popular Post</p>
                    <p className="blogline"></p> 
                    <div className="blogdivpoppost01">
                        <div className="blogdivppimg">
                            <img  src = {blog04} alt=''/>
                        </div>
                        <div className="blogdivpptxt">
                            <h5 className="blogdivpptxth">Analysing Potential Problem</h5>
                            <p className="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div>
                    <div className="blogdivpoppost02">
                        <div className="blogdivppimg">
                            <img  src = {blog05} alt=''/>
                        </div>
                        <div className="blogdivpptxt">
                            <h5 className="blogdivpptxth">Wherefore always free from repetiti</h5>
                            <p className="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div> 
                    <div className="blogdivpoppost03">
                        <div className="blogdivppimg">
                            <img  src = {blog06} alt=''/>
                        </div>
                        <div className="blogdivpptxt">
                            <h5 className="blogdivpptxth">Eum soluta nobis gendi cumque</h5>
                            <p className="blogdivpptxtp">August 25 2021</p>
                        </div>
                    </div>                  
                </div>
                <div className="blogdivl04">
                    <p className="bloglefthead">Archives</p>
                    <p className="blogline"></p>
                    <p className="blogarch">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">May 2000</a>
                    </p>
                    <p className="blogarch">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">June 2008</a>
                    </p>
                    <p className="blogarch">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">August 2010</a>
                    </p>
                    <p className="blogarch">
                        <i className="fa-sharp fa-solid fa-angle-right"></i>
                        <a href="/blog">December 2021</a>
                    </p>
                </div>
                <div className="blogdivl05">
                    <p className="bloglefthead">Tags</p>
                    <p className="blogline"></p>
                    <div className="blogdiv05tag1">
                        <a href="/blog"><p className="blogtag1">Baber</p></a>
                        <a href="/blog"><p className="blogtag2">Food</p></a>
                        <a href="/blog"><p className="blogtag3">Cat</p></a>
                    </div>
                    <div className="div05tag2">
                        <a href="/blog"><p className="blogtag4">Dog Food</p></a>
                    </div>
                </div>
                <div className="blogdivl06">
                    <p className="bloglefthead">Instagram</p>
                    <p className="blogline"></p>
                    <div className="blogdiv06imgs">
                        <img  src = {blog06} alt=''/>
                        <img  src = {blog07} alt=''/>
                        <img  src = {blog08} alt=''/>
                        <img  src = {blog09} alt=''/>
                        <img  src = {blog10} alt=''/>
                        <img  src = {blog11} alt=''/>
                    </div>
                </div>
            </div>
            <div className="blogdivright">
                <div className="blogdivr01">
                    <a href="https://youtu.be/Pw1oo5xZYAI?si=Vm0s2fhFiKEIEu0M">
                    <img className='blogdivrimg1' src = {blog} alt=''/>
                    </a>
                    <h2 className="blogdivrh2">Your Dog Incredible Sense of Hearing</h2>
                    <p className="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p className="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div className="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>
                    </div>
                </div>
                <div className="blogdivr02">
                    <img className='blogdivrimg' alt='' src = {blog12}/>
                    <h2 className="blogdivrh2">Training For Pets To Behave Like</h2>
                    <p className="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p className="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div className="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>
                    </div>   
                </div>
                <div className="blogdivr03">
                    <img className='blogdivrimg' src = {blog14} alt=''/>
                    <h2 className="blogdivrh2">A Discount Cartridge Is Better Ever </h2>
                    <p className="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p className="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div className="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>
                    </div>
                </div>
                <div className="blogdivr04">
                    <img className='blogdivrimg' src = {blog15} alt=''/>
                    <h2 className="blogdivrh2">Work Hard & Gain Success</h2>
                    <p className="blogdivrp1">By: Jon gulasu / 2 may,2022</p>
                    <p className="blogdivrp2">Typography is the work of typesetters, compositors, typographers, graphic designers,
                        art directors, manga artists, comic book artists, graffiti artists, and nowanyone
                        who arranges words.......</p>
                    <div className="blogdivrsociallogo">
                        <FaFacebookF className='blogdivrsociallogoi'/>
                        <FaTwitter className='blogdivrsociallogoi2'/>
                        <FaLinkedinIn className='blogdivrsociallogoi'/>
                    </div>
                </div>
                <div className="blogdivr05">
                    <p className="blogdivr05p">01</p>
                    <p className="blogdivr05p">02</p>
                    <p className="blogdivr05p">03</p>
                    <i className="fa-sharp fa-solid fa-angle-right"></i>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogContent
