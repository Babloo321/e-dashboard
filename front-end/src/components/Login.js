import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setEmail("");
    setPassword("");
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("Please enter a valid email and password");
    }
  };

  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
},[]);

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="Enter Email"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        type="password"
        placeholder="Enter Password"
      />
      <button onClick={loginHandler} className="btn">
        Login
      </button>
    </div>
  );
}
export default Login;
