import React from 'react'
import footerlogo02 from "../../Asset/footerlogo02.png"
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaTelegram } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
// import footerlogo02 from "../../Asset/footerlogo02.png"
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <div class="div19">
            <div class="div19cont">
                <div class="div191">
                    <img className='footerlogo' src = {footerlogo02} alt=''/>
                    <p class="div191p">Maecenas tempus tellus eget cdimentum rhoncus sem quam semper</p>
                        <div class="footerlogo">
                            <FaFacebookF className='footericon' />
                            <TiSocialTwitter className='footericon'/>
                            <TiSocialLinkedin className='footericon'/>
                            <TiSocialPinterest className='footericon'/>
                        </div>
                </div>
                <div class="divpagelink">
                    <div class="div192">
                        <h3 class="footerh3">Pages</h3>
                        <div class="div192footerp">
                        <p class="footerp"><a href="./Pages/about.html">About us</a></p> 
                        <p class="footerp"><a href="./Pages/contact.html">Faq</a></p>
                        <p class="footerp"><a href="./index.html">Shopping cart</a></p>
                        <p class="footerp"><a href="./Pages/blog.html">Blog</a></p>
                        <p class="footerp"><a href="./Pages/product.html">Product Details</a></p>
                        </div>
                    </div>
                    <div class="div193">
                        <h3 class="footerh3">Useful link</h3>
                        <div class="div193footerp">
                            <p class="footerp"><a href="./Pages/product.html">Product Category</a></p>
                        <p class="footerp"><a href="./Pages/blog.html">Checkout</a></p>
                        <p class="footerp"><a href="./index.html">Login</a></p>
                        <p class="footerp"><a href="./index.html">Registration</a></p>
                        <p class="footerp"><a href="./Pages/contact.html">Contact Us</a></p>
                        </div>
                    </div>
                </div>
                <div class="div194">
                    <h3 class="footerh3">Subscribe now</h3>
                    <div class="footertxtbx">
                        <input type="text" placeholder="Email Address"/>
                        <p><FaTelegram size={25} style={{ fill: 'rgb(131, 76, 76)' }} /></p>
                    </div>
                    <p class="subs">Subscribe to our newsletter and get 10% off your first purchase..</p>
                </div>
            </div>
        </div>
        <div class="div20">
        <p>Copyright <FaRegCopyright /> 2023.
            All rights reserved by Viserpet.</p>
        </div>
    </div>
  )
}

export default Footer
