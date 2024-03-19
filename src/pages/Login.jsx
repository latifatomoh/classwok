import React from 'react'
// import Navbar from '../component/Navbar'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const formData = { email, password}
    console.log(formData)
}

  return (
    <>
    <div className='form container d-flex justify-content-center align-items-center vh-100'>
    <form onSubmit={submitForm} action="border rounded bg-light p-5">
    <h2 className='text-container text-secondary'>Login Here</h2>
    <div className='input-container'>
    </div>
    <label htmlFor="">Email</label>
    <input 
    value={email}  
    onChange={ (e) => setEmail(e.target.value)}
    type="email" 
    placeholder="Enter your email"/>
    

    <div className='input-container my-3'>
        <label htmlFor="">password</label>
        <input 
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
        type="password" 
        placeholder="Enter your password" />
    </div>

    <div className='btn-container my-3'>
        <button className='btn btn-primary w-10'>Login Here</button>

    </div>
    </form>

    </div>
    </>
  )
}

export default Login