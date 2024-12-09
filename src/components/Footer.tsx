"use client"
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { ImInstagram } from "react-icons/im";


import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className='flex justify-around bottom-0 w-full bg-black text-white px-6 py-8'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm'>
    {/* 1st column */}
            <div className='font-helvetica-neue font-semibold leading-[32.67px]'>
                <h4>FIND A STORE</h4>
                <h4>BECOME A MEMBER</h4>
                <h4>SIGN UP FOR EMAIL</h4>
                <h4>Send Us Feedback</h4>
                <h4>STUDENT DISCOUNTS</h4>
            </div>
    {/* 2nd column */}
            <div className='space-y-4'>
                <h4 className='font-bold font-helvetica weight-400 leading-[24px] letter-[0.5px]'>GET HELP</h4>
                <ul className='space-y-2 font-helvetica weight-400 leading-[28px]'>
                    <li>Order Status</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Payment Options</li>
                    <li>Payment Options</li>
                    <li>Contact Us On Nike.com Inquiries</li>
                    <li>Contact Us On All Other Inquiries</li>
                </ul>
            </div>
    {/* 3rd column */}
            <div className='space-y-4'>
                <h4 className='font-bold font-helvetica weight-400 leading-[24px] letter-[0.5px]'>ABOUT NIKE</h4>
                <ul className='space-y-2 font-helvetica weight-400 leading-[28px]'>
                    <li>News</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Sustainability</li>
                </ul>
            </div>
    {/* 4th column */}
           
        <div className="flex mx-16 space-x-4 mt-2 md:mt-0">
            <Link href=""><FaTwitter className="w-30 h-30 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><FaFacebookF className="w-30 h-30 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><TiSocialYoutubeCircular className="w-30 h-30 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
            <Link href=""><ImInstagram className="w-30 h-30 pt-0.5 pb-0.5 bg-gray-600 rounded-full"/></Link>
        </div>

{/* bottom */}
        <div className='font-helvetica weight-400 leading-[12px]  border-gray-700 mt-8 pt-4 flex flex-row md:flex-row justify-between items-center text-xs'>
                <div className='flex justify-between space-x-40'>
                    <span  className='flex justify-between'>
                    <FaLocationDot className="absolute left-2"/>India
                        <p className="mt-2 md:mt-0 mx-8"><FaRegCopyright className="absolute left-16"/>
                         2023 Nike Inc. All Rights Reserved</p>
                    </span>
                 </div>
        </div>
</div>
        <div className="flex justify-end items-end absolute -bottom-96 right-0  font-helvetica neue mx-16 space-x-4 text-gray-400">
            <Link href="">Guides</Link>
            <Link href="">Terms of Sale</Link>
            <Link href="">Terms of Use</Link>
            <Link href="">Nike Privacy Policy</Link>
        </div> 
</footer>
</div>
  )
}

export default Footer
