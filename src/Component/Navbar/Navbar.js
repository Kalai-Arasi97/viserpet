import React from 'react'
import "./Navbar.css"
import logo from "../../Asset/logo.png"
import phone from "../../Asset/phone.png"
import email from "../../Asset/email.png"
// import 'font-awesome/css/font-awesome.min.css';
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import {  Link, useNavigate } from "react-router-dom"
// import { useHistory } from "react-router-dom"

// import Card from '../../Resuable/Card/Card'

const Navbar = () => {

  // const history = useHistory();

  // const navigateToHome = () =>{
  //   history.push('/');
  // }
  // const navigateToAbout = () => {
  //   history.push('/about'); // Redirect to the About page
  // };
  // const navigateToProduct = () =>{
  //   history.push('/');
  // }
  // const navigateToBlog = () => {
  //   history.push('/about'); // Redirect to the About page
  // };
  // const navigateToContact = () => {
  //   history.push('/about'); // Redirect to the About page
  // };

  function showText() {
    var text = document.getElementById("displayText");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

const navigate = useNavigate()
  const [logout, setLogout] = React. useState(false)
  React.useEffect(() =>{
    if(!localStorage.getItem('auth')) navigate('/login')
  },[logout])

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
            <img className='logoimg' src = {logo}/>
          </div>
          <div class="nav1contcall">
            <img className='phoneimg' src = {phone}/>
            <p>000 - 8888 - 9999</p>
          </div>
          <div class="nav1contemail">
            <img className='emailimg' src = {email}/>
            <p>viserpet@gmail.com</p>
          </div>
          <div class="nav1contusd">
            <button class="usd">USD <i class="fa-sharp fa-solid fa-chevron-down"></i></button>
          </div>
        </div>
      </div>
      <div className='nav2'>
        <div className='nav2content'>
          <ul class="list">
            <li><a href='/'>Home</a></li>
            {/* <li><Link to="/about">About</Link></li> */}

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
            <div id="displayText" class="texticon">
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


