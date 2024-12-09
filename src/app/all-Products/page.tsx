"use client"

import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuIndianRupee } from "react-icons/lu";

const allProducts = () => {
  return (
    <div>
      <div className="flex py-6">
        <div>
        <h1 className="font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">New (500)</h1>
        </div>
      <div className="flex absolute right-6 space-x-6">
      <h6 className="font-[helvetica neue] mx-4 weight-500 leading-[24px]">Hide Filters
      <HiOutlineAdjustmentsHorizontal className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/></h6>
      <h6 className="flex font-[helvetica neue] mx-4 weight-500 leading-[24px]">Sort By
     <IoIosArrowDown className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      </h6>
    </div>
   </div>
          
       <div className="container flex flex-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row justify-between mx-14">
{/* image 1 */}
      <div>
        <img src="i1.png" alt="shoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Just In</h4>
            <h4 className="font-bold text-sm">Nike Air Force 1 Mid '07</h4>
            <p className="text-gray-500">Men's Shoes</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>10 795.00</h4>
        </div>
      </div>
{/* image 2 */}
<div>
        <img src="i2.png" alt="shoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Just In</h4>
            <h4 className="font-bold text-sm">Nike Court Vision Low Next Nature</h4>
            <p className="text-gray-500">Men's Shoes</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>4 995.00</h4>
        </div>
      </div>
{/* image 3 */}
<div>
        <img src="i3.png" alt="bshoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Just In</h4>
            <h4 className="font-bold text-sm">Nike Air Force 1 PLATFORM</h4>
            <p className="text-gray-500">Women's Shoes</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>8 695.00</h4>
        </div>
      </div>
    
{/* image 4 */}
<div>
        <img src="i4.png" alt="shoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Just In</h4>
            <h4 className="font-bold text-sm">Nike Air Force 1 React</h4>
            <p className="text-gray-500">Men's Shoes</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>13 295.00</h4>
        </div>
      </div>
{/* image 5 */}
<div>
        <img src="i5.png" alt="shoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Promo Eclusion</h4>
            <h4 className="font-bold text-sm">Air Jordan 1 Elevate Low</h4>
            <p className="text-gray-500">Women's Shoes</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>11 895.00</h4>
        </div>
      </div>
{/* image 6 */}
<div>
        <img src="i6.png" alt="shoes" className="w-[348px] h-[348px]"/>
        <div className="text-start">
            <h4 className="font-bold text-sm text-red-600">Just In</h4>
            <h4 className="font-bold text-sm">Nike Standard Issue</h4>
            <p className="text-gray-500">Women's Basketball Jersey</p>
            <p className="text-gray-500">1 Colour</p>
            <h4 className="font-bold text-base flex">MRP:
            <LuIndianRupee className="mr-1 my-1"/>2 895.00</h4>
        </div>
      </div>

       </div>

    </div>
  )
}

export default allProducts
