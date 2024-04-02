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
      <div className="contactdiv03">
            <div className="contactdiv03cont">
                <div className="contactdiv031">
                    <div className="contactdiv03img">
                        <img src = {contact01} alt=''/>
                    </div>
                    <div className="contactdiv03txt">
                        <h4 className="contactdiv03h">000 - 8888 - 9999</h4>
                        <p className="contactdiv03p">Accompanied By English versions</p>
                    </div>
                </div>
                <div className="contactdiv032">
                    <div className="contactdiv03img">
                        <img  src = {contact02} alt=''/>
                    </div>
                    <div className="contactdiv03txt">
                        <h4 className="contactdiv03h">102 Street 2714 Donovan</h4>
                        <p className="contactdiv03p">including versions of Lorem Ipsum</p>
                    </div>
                </div>
                <div className="contactdiv033">
                    <div className="contactdiv03img">
                        <img  src = {contact03} alt=''/>
                    </div>
                    <div className="contactdiv03txt">
                        <h4 className="contactdiv03h">Info123@Gmail.com</h4>
                        <p className="contactdiv03p">including versions of Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="contactdiv04cont">
            <div className="contactdiv04">
                <div className="contactdiv041">
                    <div className="contactdiv041img">
                        <img src = {contact031} alt=''/>
                    </div>
                    <div className="contactdiv041img">

                    </div>
                    <div className="contactdiv041img">
                        <img src = {contact04} alt=''/>
                    </div>
                </div>
                <div className="contactdiv042cont">
                    <div className="contactdiv042">
                        <div className="contactdiv0420cont">
                            <div className="contactdiv0421">
                                <h2 className="contactsendurmsg">Send Your Message</h2> 
                                <p className="contactdiv042namep">
                                    Your Name 
                                    <span className="contactdiv042namep-style">*</span>
                                </p>
                                <input className="contactneinput" type="text" 
                                value={name} onChange={handleNameChange}/>    
                                <p className="contactdiv042namep">
                                    Email Address 
                                    <span className="contactdiv042namep-style">*</span>
                                </p>
                                <input className="contactneinput" type="text" 
                                value={email} onChange={handleEmailChange}/>
                                <p className="contactdiv042namep">Your Message</p>
                                <textarea className="contacttxtarea" name="" id="" cols="30" rows="10"
                                value={message} onChange={handleMessageChange}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contactdiv05">
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
            title="Map of Burj Khalifa location"
            ></iframe>
        </div>
        
    </div>
  )
}

export default ContactInfo
