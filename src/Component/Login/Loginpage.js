import React, { useState } from 'react'
import catdog from "../../Asset/catdog.jpg"
import "./Loginpage.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {

    const navigate = useNavigate();
    const [uemail, setEmail] = useState('');
    const [upassword, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/login', {uemail, upassword})
            .then(response => {
                console.log(response.data);
                setSuccessMessage('Valid');
                alert('Login Successful');
                localStorage.setItem('auth', 'true');
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setErrorMessage('Invalid Email or Password');
                alert('Login Failed')
            })
    }

  return (
    <div className='body'>
        <div className="login-container">
            <img className='catdog' src = {catdog} alt=''/>
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
            <h2>Login</h2>
        <form > 
            <div className="form-group">
                <label for="email">Email </label>
                <input type="text" id="uemail" name="uemail" 
                value={uemail}
                onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" id="upassword" name="upassword" 
                value={upassword}
                onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className='form-group'>
                <p className='newregister'>
                    <a href='/register'>New User to Sign In?</a>
                </p>
            </div>
            <div className="form-group">
                <button type="submit" onClick={handleLogin}>Login</button>
                {errorMessage && <p>{errorMessage}</p>}
            </div>
    </form>
</div> 
    </div>
  )
}
export default Loginpage
