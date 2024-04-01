import React, { useState } from 'react'
// import about11 from "../../Asset/about11.png"
import catdog from "../../Asset/catdog.jpg"
// import dog from "../../Asset/dog.jpg"
import "./Registration.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import {emailValidator, passwordValidator} from "../../Component/regexValidator"
const Registration = () => {

    const navigate = useNavigate();
    const[input, setInput] = useState({uname:'', uemail:'', upassword:''});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');

    const handleChange = (e) => {
        setInput ({...input, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!emailValidator(input.uemail)) {
            setErrorMessage('Please enter a valid email address');
            return;
        }

        if (!passwordValidator(input.upassword)) {
            setErrorMessage('Password should have minimum 8 characters with the combination of uppercase, lowercase, numbers and special characters');
            return;
        }

        axios.post('http://localhost:3002/register', input)
        .then(response => {
            console.log(response.data);
            alert("Registration Successful");
            navigate('/login');
        })
        .catch(error => {
            console.error(error);
            alert('Registration Failed');
        })
    }

  return (
    <div className='body'>
        <div class="login-container">
            <img className='catdog' src = {catdog}/>
            {errorMessage.length >0 && (
                <div style = {{marginBottom: "10px", color:"red"}}>
                    {errorMessage}
                    </div>
            )}
              {successMessage.length >0 && (
                <div style = {{marginBottom: "10px", color:"green"}}>
                    {successMessage}
                    </div>
            )}
            <h2>Register</h2>
        <form onSubmit={handleSubmit}> 
            <div class="form-group">
                <label for="email">Your Name</label>
                <input type="text" id="uname" name="uname" onChange={handleChange} required/>
            </div>
            <div class="form-group">
                <label for="email">Your Email Id</label>
                <input type="text" id="uemail" name="uemail" onChange={handleChange} required/>
            </div>
            <div class="form-group">
                <label for="password">Your Password</label>
                <input type="password" id="upassword" name="upassword" onChange={handleChange} required/>
            </div>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
    </form>
</div> 
    </div>
  )
}
// const formSubmitter = e =>{
//     if(input.username !== "Kalai" || input.password !== "Kalai" ) return alert("No user Found");
//   }

export default Registration
