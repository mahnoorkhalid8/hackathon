"use client";

import React from 'react';
import Link from 'next/link';

const Login_Page = () => {
  return (    

    <div className='flex flex-col justify-center items-center min-h-screen px-4 md:px-0'>

        {/* logo & heading */}
        <img src="nike.png" alt="logo" className='w-24 h-24 md:w-40 md:h-40 mb-4' />
        <h1 className='font-Helvetica text-2xl md:text-3xl my-2 text-center max-w-xs font-bold'>YOUR ACCOUNT FOR EVERYTHING NIKE</h1>  
        
        {/* input fields */}
        <fieldset className='w-full md:w-1/4 mt-5'>
            <input type="email" placeholder='Email address' className='w-full p-3 border rounded-md mb-3'/>
        </fieldset>

        <fieldset className='w-full md:w-1/4 mt-3'>
            <input type="password" placeholder='Password' className='w-full p-3 border rounded-md mb-3'/>
        </fieldset>

    <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mt-4 text-gray-400'>
        {/* Checkbox and Label */}
    <label className='flex items-center gap-2'>
        <input type="checkbox" className='accent-white border-gray-400 border-solid w-4 h-4'/>
        <span>Keep me signed in</span>
    </label>
  
    {/* Forgot Password Text */}
    <p className='hover:underline cursor-pointer'>Forgotten your password?</p>
    </div>

    <p className='text-gray-400 font-Helvetica text-center w-full md:w-1/4 pt-5 mt-5'>By logging in, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use.</u></p>

    {/* sign in button */}
    <button className=" bg-black text-white w-full md:w-1/4 h-12 md:h-16 mt-10 px-4 rounded-sm">SIGN IN</button>

    <p className='text-gray-400 font-Helvetica text-center pt-5 mt-5'>Not a Member? <Link href="/join-us"><span className='text-black'><u>Join Us.</u></span></Link></p>
      </div>
  )
}

export default Login_Page
