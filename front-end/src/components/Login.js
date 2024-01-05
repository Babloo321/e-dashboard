import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email, setEmail] = useState('');
    const [pasword, setPassword] = useState('');
    const auth = JSON.parse(localStorage.getItem('user'));
    // // console.log(auth);
    // console.log(auth.email)
    const navigate = useNavigate();
    const loginHandler = () => {
        if(email === auth.email && pasword == auth.pasword){
            console.log("user login successful");
            navigate('/')
        }
    }
    return(
        <div className="login">
            <input 
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="inputBox"
            type="text" placeholder="user email"/>

            <input 
            value={pasword}
            onChange={(e) => setPassword(e.target.setPassword)}
            className="inputBox"
            type="text" placeholder="user email" />
            <button
            onClick={loginHandler}
            className="btn"
            >Login</button>
        </div>
    )
}
export default Login;