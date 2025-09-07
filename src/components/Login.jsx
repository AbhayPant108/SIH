import React from 'react'
import Input from './Input';
import Btn from './Btn';
import { useDispatch } from 'react-redux';
import { login } from '../reduxconfig/authSlice';
import { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm();
    const [error, setError] = useState("");
    const handleLogin = async(data) => {
        
        
        try {
        if(data) {
            
            
        // const session = await axios.post('/api/login', data);
        if (session) {
            // const userData = await axios.get(`/api/users/${data.id}`);
            dispatch(login(userData));
            navigate('/');
        }
        else {
            dispatch(logout());

        }
    }
    } catch (error) {
         setError(error.message)
    }
    }
  return (
    <div className='w-[80%] md:w-lg p-10 shadow-2xl m-auto rounded-xl flex flex-wrap'>
        <h1 className='w-full text-center text-3xl mb-10 font-serif'>Login to your account</h1>
        <form onSubmit={handleSubmit(handleLogin)} className='w-full space-y-6'>
        <Input label="Email: "  type="email" placeholder="Enter email" {...register("email",{required: true})} />
        <Input label="Password: " type="password" placeholder="Enter password" 
        {...register("password",{
            required: true
        })} />
        <Btn type="submit" className={`mt-2 py-3 font-medium text-lg`}>Login</Btn>
        </form>
        <div className='flex flex-wrap justify-center items-center w-full mt-4 text-xs md:text-sm text-center'>
        <p className=' '>Don't have an account? </p>
        <Link className='text-blue-600 inline text-sm ' to={`/signup`}> Create account</Link>
        </div>
    </div>
  )
}

export default Login