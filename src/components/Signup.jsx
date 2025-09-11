import React from 'react'
import Input from './Input';
import Btn from './Btn';
import { useDispatch } from 'react-redux';
import { login } from '../reduxconfig/authSlice';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
function Signup() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState("");
    const handleLogin = async (data) => {
        setError('')

        try {
            if (data) {
                console.log(data);

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
    <div className='w-[100%] sm:w-lg  p-10 m-auto shadow-2xl rounded-xl flex flex-wrap'>
            <h1 className='w-full text-center text-3xl mb-10 font-serif'>Create your account</h1>
            {error && (<p className='bg-red-500 border-red-50'>{error}</p>)}
            <form onSubmit={handleSubmit(handleLogin)} className='w-full space-y-5'>
                <Input label='Fullname: ' type='text' placeholder='Enter Fullname' {...register('fullname',{
                    required:true,
                })} />
                <Input label="Phone No.:" type="tel" placeholder='Enter Phone No.' {...register("phoneNumber",{
                    required:true,
                    pattern:{
                        value:/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
                        message:'Invalid Phone Number'
                    }
                })} />
                <Input label="Email: " type="email" placeholder="Enter email" {...register("email", { required: true })} />
                
                {/* pattern checking problem */}
                <Input label="Password: " type="password" placeholder="Enter password"
                    {...register("password", {
                        required: true,
                        // pattern: {
                        //     value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
                        //     message: 'Choose a strong password'
                        // }
                    })} />
        <Btn type="submit" className={`mt-2 py-3 font-medium text-lg`}>Create account</Btn>
            </form>
            <div className='w-full mt-4 flex flex-wrap justify-center items-center text-sm sm:text-base text-center'>
            <p >Already have an account?</p>
                <Link to={`/login`} className='cursor-pointer text-blue-700'> Sign In</Link>
            
            </div>
        </div>
    )
}

export default Signup