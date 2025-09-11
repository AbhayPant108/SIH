import React, { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Btn from './Btn';
import Language from './Language';

function Header({ options = [] }) {



    




    return (
        <header className="site-header  md:sticky md:flex flex-wrap md:mx-5 md:rounded-2xl justify-center shadow-[0_0_10px_0_rgb(0,0,0,0.3)] md:mt-5 px-3 gap-y-2 py-3">
            <div className=" w-full flex justify-between ">
                <Link to="/" className="brand text-sm sm:text-base" aria-label="Telemedicine Nabha">
                    <span className="brand-logo" />
                    Telemedicine Nabha
                </Link>
            <div>
            <div className='flex items-center   '>
                    <Language />
                    <Link className='hidden sm:inline-block' to={`/login`} >
                        <Btn className='sm:py-3 sm:text-sm text-xs p-2 py-3 bg-blue-500 flex-auto font-bold text-white  rounded-xl hover:bg-blue-600'>Login/Signup</Btn>
                    </Link>
                    </div>
                </div>
            </div>

            <div className="md:flex hidden w-full justify-between px-5 p-3 rounded-2xl sm:shadow-[0_0_10px_0_var(--surface)] " >

                <nav className="nav-links w-full flex  mx-auto font-medium antialiased ">
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