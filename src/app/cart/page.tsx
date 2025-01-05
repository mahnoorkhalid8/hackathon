"use client";

import React from 'react';
import { GoHeart } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuIndianRupee } from "react-icons/lu";
import Link from 'next/link';

const Cart = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between mx-auto p-4 md:p-8 gap-6'>
        {/* left section */}
        <div className='w-full lg:w-[60%] mx-2 md:mx-10'>

            <div className='bg-gray-200 border-solid p-4 mb-6'>
                <h6 className='font-semibold'>Free Delivery</h6>
                    <div className='flex justify-between gap-20'>
                    <p>Applies to orders of ₹ 14 000.00 or more.</p>
                    <p><strong><u>View details</u></strong></p>
                    </div>
            </div>

            <h1 className='font-bold text-xl md:text-2xl pt-4'>Bag</h1>

            {/* 1st boder */}
            <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 '>
                <img src="Image (4).png" alt="Men's short sleeves" className='w-[150px] h-[150px] object-cover' />
                <div className='text-gray-500 space-y-3 sm:ml-4'>
                    <h4 className='text-black text-lg'>Nike Dri-FIT ADV TechKnit Ultra</h4>
                    <p>Men's Short-Sleeve Running Top</p>
                    <p>Ashen Slate/Cobalt Bliss</p>

                    <div className='flex gap-4'>
                    <p>Size L</p>
                    <p>Quantity 1</p>
                    </div>

                    <div className='flex gap-6 text-2xl text-black'>
                        <GoHeart/>
                        <RiDeleteBinLine />
                    </div>
                </div>
                <h4 className='flex text-gray-700'>MRP:<LuIndianRupee className=' mr-1 my-1'/>3 895.00</h4>
            </div>

            {/* 2nd border */}
            <div className='flex flex-col sm:flex-row  justify-end items-center mb-6 gap-4 md:gap-40'>
                <div className='text-gray-500 space-y-3 '>
                    <h4 className='text-black text-lg'>Nike Air Max 97 SE</h4>
                    <p>Men's Shoes</p>
                    <p>Flat Pewter/Light Bone/Black/White</p>

                    <div className='flex gap-4'>
                    <p>Size 8</p>
                    <p>Quantity 1</p>
                    </div>

                    <div className='flex gap-6 text-2xl text-black'>
                        <GoHeart/>
                        <RiDeleteBinLine />
                    </div>
                </div>
                <h4 className='flex text-gray-700 '>MRP:<LuIndianRupee className=' mr-1 my-1'/>3 895.00</h4>
            </div>
        </div>

          {/* right section */}
            <div className='w-full md:w-[30%] mx-2 md:mx-10 space-y-6'>
            <h1 className='font-semibold text-2xl lg:text-3xl'>Summary</h1>

            <div className='flex justify-between text-gray-700'>
                <p>Subtotal</p>
                <p className='flex'>MRP:<LuIndianRupee className='mr-1 my-1'/>3 895.00</p>
            </div>

            <div className='flex justify-between text-gray-700'>
                <p>Estimated Delivery & Handling</p>
                <p>Free</p>
            </div>
            <hr />

            <div className='flex justify-between text-gray-700'>
                <p>Total</p>
                <p className='flex'>MRP:<LuIndianRupee className='mr-1 my-1'/>3 895.00</p>
            </div>
            <hr />

            {/* button */}
            <Link href="/checkout"><button className="bg-black text-white text-center w-full py-5 text-xl md:text-2xl rounded-full">Member Checkout</button></Link>
          
          </div>
    </div>
  )
}

export default Cart