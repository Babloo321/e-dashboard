import React,{ useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom'
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        let auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    },[])

    const collectData = async () =>{
        // console.table(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`)
        
        let result =await fetch('http://localhost:5000/register',{
            method:'POST',
            body: JSON.stringify({name,email,password}),
            headers: {
                "Content-Type": "application/json",
              },
        });

        // let result = axios()
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result);
        setName('');
        setEmail('');
        setPassword('');
        if(result){
            navigate('/')
        }
    }
    return(
        <div className="signup">

        <h1>Signup</h1>

        <input 
        className="inputBox" 
        type="text" 
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        
        <input 
        className="inputBox" 
        type="text" 
        placeholder="enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        
        />
        <input 
        className="inputBox" 
        type="password" 
        placeholder="enter passowrd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        
        <button 
        onClick={collectData}
        className="btn" 
        type="button">
            Signup
        </button>
        </div>
    )
}
export default Signup;