"use client"

import React from 'react'
import Link from "next/link";
import { SiNike } from "react-icons/si";
import { SiJordan } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { RiShoppingBagLine } from "react-icons/ri";

const Header = () => {
  return (
    <div>
    <div className='bg-gray-100 px-8 py-2 '>                                           
{/* top bar */}
        <div className="flex justify-between text-sm text-gray-500 mb-2">
            <div className='flex items-center justify-between'>
    <div className='flex items-center space-x-6'>
    <SiJordan className="w-8 h-8"/>
    </div>
            <div className='flex absolute right-6 space-x-4'>
                <span>Find a Store</span>
                <span>|</span>
                <span>Help</span>
                <span>|</span>
                <span>Join Us</span>
                <span>|</span>
                <span>Sign In</span>
            </div>
        </div>
       </div>

    {/* main bar */}
    {/* center navigations */}
  <div className='flex justify-between'>
      <div className='flex space-x-8 text-black text-sm'>
        <SiNike className='w-12 h-12' />
          <div className='flex justify-center items-center space-x-8'>
        <Link href="" className='hover:underline'>New & Featured</Link>
        <Link href="" className='hover:underline'>Men</Link>
        <Link href="" className='hover:underline'>Women</Link>
        <Link href="" className='hover:underline'>Kids</Link>
        <Link href="" className='hover:underline'>Sale</Link>
        <Link href="" className='hover:underline'>SNKRS</Link>
          </div>
      </div>

      {/* right side */}
      <div className='flex items-center space-x-6'>
        <input type="text" placeholder='Search' className='bg-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-none' />
        <span className='text-grey-500'>
        <CiSearch/></span>
        <span><GoHeart/></span>
        <span><RiShoppingBagLine /></span>
      </div>
  </div>
    </div>
    </div>
  )
}

export default Header
