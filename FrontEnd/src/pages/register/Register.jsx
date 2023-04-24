import React, { useState } from 'react'
import './Register.scss'
import axios from 'axios'
import upload from '../../utils/upload'
import newRequest from '../../utils/newRequest'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  })

  


  const handleChange = (e) => {
    setUser((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSeller = (e) => {
    setUser((prev) => {
      return {...prev, isSeller: e.target.checked}
    })
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const url = await upload(file)
    
    try {
      await newRequest.post("/auth/register/",{
        ...user, img: url
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder='johndoe' onChange={handleChange} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder='john@email.com' onChange={handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
          <label htmlFor="pp">Profile Picture</label>
          <input type="file" name="pp" id="pp" onChange={e=> {setFile(e.target.files[0])}} />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" placeholder='USA' onChange={handleChange}/>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label htmlFor="switch" className='switch'>
              <input type="checkbox" name="switch" id="switch" onChange={handleSeller} />
              <span className='slider round'></span>
            </label>
          </div>
          <label htmlFor="phone">Phone number</label>
          <input type="text" name="phone" id="phone" placeholder='+1 xxx xxx xx' onChange={handleChange} />
          <label htmlFor="desc">Decription</label>
          <textarea name="desc" id="desc" cols="30" rows="10" placeholder='A short description of yourself' onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register