import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Btn from './Btn';

function Header({ options = [] }) {



    



const { register, handleSubmit } = useForm({
  defaultValues: {
    language: "English", // must match option value
  },
});
    return (
        <header className="site-header flex flex-wrap mx-5 rounded-2xl justify-center shadow-[0_0_10px_0_rgb(0,0,0,0.3)] mt-5 px-3 gap-y-2 py-3">
            <div className=" w-full flex justify-between ">
                <Link to="/" className="brand w" aria-label="Telemedicine Nabha">
                    <span className="brand-logo" />
                    Telemedicine Nabha
                </Link>
            <div>
            <div className='flex '>
            <form className="lang-toggle mr-10 m-auto "><select className='p-0.5 outline-none cursor-pointer' role="tablist" aria-label="Language Toggle"
                        {...register('language')}  >
                            <option value="English">Eng</option>
                        {options?.map(option => (
                            <option
                                key={option}
                                value={option}
                                onChange={(e) => setValue('language',e.target.value)}
                            >
                            
                            {l.label}
                        </option>
                    ))}
                </select>
            </form>
                    <Link to={`/login`} >
                        <Btn className='py-3 bg-blue-500 font-bold text-white rounded-xl hover:bg-blue-600'>Login/Signup</Btn>
                    </Link>
                    </div>
                </div>
            </div>

            <div className="flex w-full justify-between px-5 p-3 rounded-2xl shadow-[0_0_10px_0_var(--surface)] " >

                <nav className="nav-links w-full flex justify-between mx-auto font-medium antialiased md:hidden ">
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/" end>Home</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/consult">Consult</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/medicines">Medicines</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/about">About</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/symptoms">Symptom Checker</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/records">Records</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/awareness">Awareness</NavLink>
                    <NavLink className={({ isActive }) => `my-auto p-2.5 rounded-2xl hover:bg-gray-200 transition text-black ${isActive ? "text-blue-500" : null}`} to="/contact">Contact</NavLink>
                </nav>

            </div>



        </header>
    )
}

export default Header