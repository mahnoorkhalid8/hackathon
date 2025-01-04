"use client";

import React from 'react'

const JoinUs = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen px-4 md:px-0'>

    {/* logo & heading */}
    <img src="nike.png" alt="logo" className='w-24 h-24 md:w-40 md:h-40 mb-4' />
    <h1 className='font-Helvetica text-xl md:text-2xl my-0 text-center font-bold'>BECOME A NIKE MEMBER</h1>
    <p className='mt-4 text-gray-400 max-w-sm md:max-w-md text-center text-sm md:text-base'>Create your Nike Member profile and get first access to the very
        best of Nike products, inspiration and community</p>
    
    {/* input fields */}
    <div className='w-full md:w-[30%] mt-5 space-y-3'>
        <input type="email" placeholder='Email address' className='w-full p-3 border rounded-md'/>
   
        <input type="password" placeholder='Password' className='w-full p-3 border rounded-md'/>

        <input type="text" placeholder='First Name' className='w-full p-3 border rounded-md'/>

        <input type="text" placeholder='Last Name' className='w-full p-3 border rounded-md'/>

        <input type="date" placeholder='Date of Birth' className='w-full p-3 border rounded-md'/>
    </div>

    <p className='text-gray-400 text-sm text-center mt-2'>Get a Nike Member Reward every year on your Birthday.</p>

    <div className='w-full md:w-[30%] mt-3'>
        <select className='w-full text-gray-400 p-3 border rounded-md'>
            <option value="India">India</option>
        </select>
    </div>

    <div className='flex flex-col md:flex-row justify-between w-full md:w-[30%] gap-3 mt-3'>
 
        <input type="" placeholder='Male' className='w-full md:w-1/2 p-3 border rounded-md'/>
    
        <input type="" placeholder='Female' className='w-full md:w-1/2 p-3 border rounded-md'/>

    </div>

    {/* checkbox */}
    <div className='w-full md:w-[30%] mt-4 text-gray-400 text-sm'>
        {/* Checkbox and Label */}
    <label className='flex items-start gap-3 '>
        <input type="checkbox" className='w-10 h-10 mt-1'/>
        <span>Sign up for emails to get updates from Nike on products, offers and your Member benefits</span>
    </label>
    </div>

    <p className='text-gray-400 text-xs md:text-sm text-center w-full md:w-[30%] mt-5'>
    By creating an account, you agree to Nike's <u>Privacy Policy</u> and <u>Terms of Use.</u></p>

    {/* sign in button */}
    <button className=" bg-black text-white w-full md:w-[30%] h-12 md:h-16 mt-6 text-sm md:text-base rounded-md">JOIN US</button>

    <p className='text-gray-400 text-sm text-center mt-3'>
    Already a Member? <span className='text-black'><u>Sign In.</u></span></p>
    
    </div>
  )
}

export default JoinUs
