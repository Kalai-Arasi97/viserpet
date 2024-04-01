import React from 'react'
import contact01 from "../../../Asset/contact01.png"
import contact02 from "../../../Asset/contact02.png"
import contact03 from "../../../Asset/contact03.png"
import contact031 from "../../../Asset/contact031.png"
import contact04 from "../../../Asset/contact04.png"
import "./ContactInfo.css"
import axios from 'axios';
import { useState } from 'react'

const ContactInfo = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const[message, setMessage] = useState('');

    const handleSubmit = () =>{
        axios.post('http://localhost:3002/sendmessage', {name, email, message})
        .then(response =>{
            console.log(response.data);
            // console.log("Success");
            alert("Message sent")

        })
        .catch(error =>{
            console.log(error);
            console.log("Error");
        })
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
      }
      
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      }
      
      const handleMessageChange = (event) => {
        setMessage(event.target.value);
      }


  return (
    <div>
      <div class="contactdiv03">
            <div class="contactdiv03cont">
                <div class="contactdiv031">
                    <div class="contactdiv03img">
                        <img src = {contact01}/>
                        {/* <img src="../Assets/Img/contact01.png" alt=""> */}
                    </div>
                    <div class="contactdiv03txt">
                        <h4 class="contactdiv03h">000 - 8888 - 9999</h4>
                        <p class="contactdiv03p">Accompanied By English versions</p>
                    </div>
                </div>
                <div class="contactdiv032">
                    <div class="contactdiv03img">
                        <img  src = {contact02}/>
                    </div>
                    <div class="contactdiv03txt">
                        <h4 class="contactdiv03h">102 Street 2714 Donovan</h4>
                        <p class="contactdiv03p">including versions of Lorem Ipsum</p>
                    </div>
                </div>
                <div class="contactdiv033">
                    <div class="contactdiv03img">
                        <img  src = {contact03}/>
                    </div>
                    <div class="contactdiv03txt">
                        <h4 class="contactdiv03h">Info123@Gmail.com</h4>
                        <p class="contactdiv03p">including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="contactdiv04cont">
            <div class="contactdiv04">
                <div class="contactdiv041">
                    <div class="contactdiv041img">
                        <img src = {contact031}/>

                        {/* <img src="../Assets/Img/contact03 (1).png" alt=""> */}
                    </div>
                    <div class="contactdiv041img">
                        
                    </div>
                    <div class="contactdiv041img">
                        <img src = {contact04}/>

                        {/* <img src="../Assets/Img/contact04.png" alt=""> */}
                    </div>
                </div>
                <div class="contactdiv042cont">
                    <div class="contactdiv042">
                        <div class="contactdiv0420cont">
                            <div class="contactdiv0421">
                                <h2 class="contactsendurmsg">Send Your Message</h2> 
                                <p class="contactdiv042namep">
                                    Your Name 
                                    <span class="contactdiv042namep-style">*</span>
                                </p>
                                <input class="contactneinput" type="text" 
                                value={name} onChange={handleNameChange}/>    
                                <p class="contactdiv042namep">
                                    Email Address 
                                    <span class="contactdiv042namep-style">*</span>
                                </p>
                                <input class="contactneinput" type="text" 
                                value={email} onChange={handleEmailChange}/>
                                <p class="contactdiv042namep">Your Message</p>
                                <textarea class="contacttxtarea" name="" id="" cols="30" rows="10"
                                value={message} onChange={handleMessageChange}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="contactdiv05">
            <button onClick={handleSubmit}>Send Your Message</button>
        </div>


        <div className="contactdiv06">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.1786534495045!2d55.274376!3d25.197197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sbd!4v1694435824375!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        
    </div>
  )
}

export default ContactInfo
