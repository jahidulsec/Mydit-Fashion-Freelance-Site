import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./Login.scss";
import newRequest from "../../utils/newRequest";
import axios from "axios";


function Login() {
  const [username, setUsername] = useState('')  
  const [password, setPassword] = useState('')  
  const [error, setError] = useState(null)  

  const navigate = useNavigate()
 

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await newRequest.post("/auth/login", {username, password})
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    } catch (error) {
      setError(error.response.data)
      console.log(error.response.data)
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="username">Username</label>
        <input 
          type="text"
          name="username"
          id="username"
          placeholder="johndoe"
          onChange={e => {setUsername(e.target.value)}}
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          onChange={e=> setPassword(e.target.value)}  
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
}

export default Login;
