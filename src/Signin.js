import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './context/AuthContext'


const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const {signIn} = UserAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')    
        } catch (event) {
            setError(event.message)
            console.log(event.message);
        }
    }


  return (
    <div>
        <div className='max-w-[700px] mx-auto my-16 p-4'>
            <div>
                <h1 className='text-2xl font-bold py-2'>Sign in to your account</h1>
                <p className='py-2'>Don't have an account yet? <Link to="/Signup" className='underline text-blue-500'>Sign Up</Link></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Email Address</label>
                    <input  onChange={(event) => setEmail(event.target.value)} className='border p-3' type="email" />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 font-medium'>Password</label>
                    <input  onChange={(event) => setPassword(event.target.value)} className='border p-3' type="password" />
                </div>
                <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-3 my-2 text-white'>Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default Signin