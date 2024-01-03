import React,{ useState} from "react";
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleData = () =>{
        console.table(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`)
        setName('');
        setEmail('');
        setPassword('');
    }
    return(
        <div className="signup">

        <h1>Signup component</h1>

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
        onClick={handleData}
        className="btn" 
        type="button">
            Signup
        </button>
        </div>
    )
}
export default Signup;