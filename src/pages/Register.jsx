import React from 'react'
// import Navbar from '../component/Navbar'
import { useState } from 'react'

const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneName] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        const formData = {fullName, email, phoneNumber, password}
        console.log(formData)
    }
  return (
    <>
   <div className='form container d-flex justify-content-center align-items-center vh-100'>
   <form onSubmit={submitForm} action="" className='border rounded bg-light p-5'>
    <h2 className='text-center text-secondary'>Register</h2>
    <div className='input-container my-3'>
    <label htmlFor="">Fullname</label>
    <input 
    value={fullName} 
    className='bg-white' 
    onChange={(e) => setFullName(e.target.value)}
    type="text" 
    placeholder="Enter Your Fullname"  />
    
    </div>

    <div className='input-container my-3'>
    <label htmlFor="">Email</label>
    <input 
    value={email} 
    onChange={ (e) => setEmail(e.target.value)}
    type="email" 
    placeholder="Enter Your Email address"  />
    
    </div>

    <div className='input-container my-3'>
        <label htmlFor="">phone number</label>
        <input 
        value={phoneNumber} 
        className='' 
        onChange={ (e) => setPhoneName(e.target.value)}
        type="phone" 
        placeholder="Enter Your phone number"  />
    
    </div>

    <div className='input-container my-3'>
        <label htmlFor="">password</label>
        <input 
        value={password} 
        onChange={ (e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Your password"  />
    
    </div>

    <div className='btn-container my-3'>
    <button className='btn btn-primary w-100'>Register</button>
    </div>
   </form>
   </div>
   
    </>
  )
}

export default Register