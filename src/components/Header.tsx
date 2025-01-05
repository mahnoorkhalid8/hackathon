"use client"

import React, { useState } from 'react'
import Link from "next/link";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen (!isMenuOpen);

  return (
  <header className='bg-gray-100 px-4 md:px-8 py-2 shadow-md'>

    {/* top bar */}

        <div className="hidden md:flex justify-between text-sm text-gray-500 mb-2">

          <div className='flex items-center space-x-6'>
           <SiJordan className="w-8 h-8"/></div>

            <div className='flex space-x-4'>
                <Link href="/all-Products"><span className='hover:text-black'>Find a Store</span></Link>
                <span>|</span>

                <Link href="/contact-us"><span className='hover:text-black'>Help</span></Link>
                <span>|</span>

                <Link href="/join-us"><span className='hover:text-black'>Join Us</span></Link>
                <span>|</span>

                <Link href="/login"><span className='hover:text-black'>Sign In</span></Link>
            </div> 
        </div>

    {/* main navigation bar */}
   
  <div className='flex justify-between items-center'>

    {/* logo and links */}

      <div className='flex items-center space-x-4 md:space-x-8 text-sm'>
        <SiNike className='w-12 h-12' />
      </div>

      {/* menu hidden on mobile */}
      <div>
        <nav className='hidden md:flex space-x-4 lg:space-x-8 text-sm'>
          <Link href="#" className='hover:underline'> New & Featured </Link>
          <Link href="#" className='hover:underline'> Men </Link>
          <Link href="#" className='hover:underline'> Women </Link>
          <Link href="#" className='hover:underline'> Kids </Link>
          <Link href="#" className='hover:underline'> Sale </Link>
          <Link href="#" className='hover:underline'> SNKRS </Link>
        </nav>

      </div>

      {/* right side */}
      <div className='flex items-center space-x-4 md:space-x-6'>

        <div className='relative hidden md:block'>
          <input type="text" placeholder='Search' className='bg-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-none' />
          <CiSearch className='absolute left-3 top-1.5 text-gray-500'/>
        </div>
        
        <span><GoHeart/></span>
        <span><RiShoppingBagLine /></span>

        {/* mobile menu button */}
        <button onClick={toggleMenu} className='md:hidden text-2xl'>
          {isMenuOpen ? <IoIosCloseCircleOutline /> : <IoMdMenu/>}
        </button>
      </div>
    </div>

    {/* mobile navigation functionality */}
    <div className={`fixed inset-0  z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:hidden`}>

      <div className='p-4'>
        <button onClick={toggleMenu} className='text-2xl mb-4'>
        <IoIosCloseCircleOutline />
        </button>

        <nav className='flex gap-2 space-x-4 text-sm'>
          <Link href="#" className='block'> New & Featured </Link>
          <Link href="#" className='block'> Men </Link>
          <Link href="#" className='block'> Women </Link>
          <Link href="#" className='block'> Kids </Link>
          <Link href="#" className='block'> Sale </Link>
          <Link href="#" className='block'> SNKRS </Link>
        </nav>
      </div>
    </div>

</header>
  );
};

export default Header
