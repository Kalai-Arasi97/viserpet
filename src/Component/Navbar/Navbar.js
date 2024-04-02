import React from 'react'
import "./Navbar.css"
import logo from "../../Asset/logo.png"
import phone from "../../Asset/phone.png"
import email from "../../Asset/email.png"
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import {  useNavigate } from "react-router-dom"

const Navbar = () => {

  function showText() {
    var text = document.getElementById("displayText");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

const navigate = useNavigate()
  const [logout, setLogout] = React.useState(false)
  React.useEffect(() =>{
    if(!localStorage.getItem('auth')) navigate('/login')
  },[navigate, logout])

  const logoutHandler = e =>{
      e.preventDefault();
      localStorage.removeItem('auth') 
      setLogout(true)
  }

  return (
    
    <div className='navbar' >
      <div className='nav1'>
        <div className='nav1cont'>
          <div className='nav1contlogo'>
            <img className='logoimg' src = {logo} alt=''/>
          </div>
          <div className="nav1contcall">
            <img className='phoneimg' src = {phone} alt=''/>
            <p>000 - 8888 - 9999</p>
          </div>
          <div className="nav1contemail">
            <img className='emailimg' src = {email} alt=''/>
            <p>viserpet@gmail.com</p>
          </div>
          <div className="nav1contusd">
            <button className="usd">USD <i className="fa-sharp fa-solid fa-chevron-down"></i></button>
          </div>
        </div>
      </div>
      <div className='nav2'>
        <div className='nav2content'>
          <ul className="list">
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li> 
            <li><a href='/product'>Product</a></li>
            <li><a href='/blog'>Blog</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>
          <div className='nav2logo'>
            <FaRegHeart size={23} style={{ fill: 'white' }}/>
            <RiShoppingCart2Fill size={23} style={{ fill: 'white' }}/>
            <div className='iconhov' onClick={showText}>
              <FaRegUser  size={23} style={{ fill: 'white' }}/>
            </div>
            <div id="displayText" className="texticon">
              <h3>Thank You!</h3>
              <p>
        <button className='logbtn' onClick={logoutHandler}>Logout</button>
        </p>
            </div>
          </div>
       </div>
      </div>
    </div>
    )
}

export default Navbar


