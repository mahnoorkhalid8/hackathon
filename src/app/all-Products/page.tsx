"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaRupeeSign } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";

const AllProducts = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation happens only once
    });
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* sidebar toogle button functionality */}
      <div
        className={`inset-0 z-50 md:relative md:block md:w-[20%] px-4 md:px-10 border-r border-gray-300 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "block" : "hidden"
        }md:block `}
      >
        <button onClick={toggleSidebar} className="md:hidden text-2xl">
          <IoMdMenu />
        </button>
      </div>

      {/* top bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-6 md:px-10">
        <div>
          <h1 className="font-[helvetica neue] font-bold h-[27px] text-lg leading-[28px]">
            New (500)
          </h1>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
          <h6 className="flex items-center gap-2 font-[helvetica neue] text-sm md:text-base">
            Hide Filters
            <HiOutlineAdjustmentsHorizontal className="my-1 bg-gray-300 w-6 h-6 rounded-full hover:border" />
          </h6>
          <h6 className="flex items-center gap-2 font-[helvetica neue] text-sm md:text-base">
            Sort By
            <IoIosArrowDown className=" bg-gray-300 w-6 h-6 rounded-full hover:border" />
          </h6>
        </div>
      </div>

      {/* sections */}
      <div className="flex gap-3">
        {/* sidebar (left section) */}
        <div className="h-100vh md:h-auto w-full md:w-[20%] px-3 md:px-10 md:block hidden md:flex-shrink-0 border-r border-gray-200">
          <div className="font-semibold mb-12">
            <ul className="space-y-4">
              <li>Shoes</li>
              <li>Sports Bras</li>
              <li>Tops & T-Shirt</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Trousers & Tights</li>
              <li>Shorts</li>
              <li>Tracksuits</li>
              <li>Jumpsuits & Rompers</li>
              <li>Skirts & Dresses</li>
              <li>Socks</li>
              <li>Accessories & Equipment</li>
            </ul>
          </div>

          <hr />

          {/* gender */}
          <div className="mt-4 mb-4">
            <h2 className="flex justify-between font-semibold mt-2">
              Gender
              <IoIosArrowUp />
            </h2>
          </div>

          <div className="mt-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span>Men</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span>Women</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span>Unisex</span>
            </label>
          </div>

          <hr />

          {/* kids */}
          <div className="mt-4 mb-4">
            <h2 className="flex justify-between font-semibold mt-2">
              Kids
              <IoIosArrowUp />
            </h2>
          </div>

          <div className="mt-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span>Boys</span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span>Girls</span>
            </label>
          </div>

          <hr />

          {/* shop by price */}
          <div className="mt-4 mb-4">
            <h2 className="flex justify-between font-semibold mt-2">
              Shop By Price
              <IoIosArrowUp />
            </h2>
          </div>

          <div className="mt-4 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span className="flex gap-1">
                Under
                <FaRupeeSign  className="mr-1 my-1" />2 500.00
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span className="flex gap-1">
                <FaRupeeSign  className="mr-1 my-1" />2 501.00-
                <FaRupeeSign  className="mr-1 my-1" />
              </span>
            </label>
          </div>
        </div>

        <div
          className={` inset-0  z-50 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform md:hidden`}
        >
          <div className="p-4">
            <button onClick={toggleSidebar} className="text-2xl mb-4">
              <IoIosCloseCircleOutline />
            </button>

            <div className="font-semibold mb-12">
              <ul className="space-y-4">
                <li>Shoes</li>
                <li>Sports Bras</li>
                <li>Tops & T-Shirt</li>
                <li>Hoodies & Sweatshirts</li>
                <li>Jackets</li>
                <li>Trousers & Tights</li>
                <li>Shorts</li>
                <li>Tracksuits</li>
                <li>Jumpsuits & Rompers</li>
                <li>Skirts & Dresses</li>
                <li>Socks</li>
                <li>Accessories & Equipment</li>
              </ul>
            </div>

            <hr />

            {/* gender */}
            <div className="mt-4 mb-4">
              <h2 className="flex justify-between font-semibold mt-2">
                Gender
                <IoIosArrowUp />
              </h2>
            </div>

            <div className="mt-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span>Men</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span>Women</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span>Unisex</span>
              </label>
            </div>

            <hr />

            {/* kids */}
            <div className="mt-4 mb-4">
              <h2 className="flex justify-between font-semibold mt-2">
                Kids
                <IoIosArrowUp />
              </h2>
            </div>

            <div className="mt-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span>Boys</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span>Girls</span>
              </label>
            </div>

            <hr />

            {/* shop by price */}
            <div className="mt-4 mb-4">
              <h2 className="flex justify-between font-semibold mt-2">
                Shop By Price
                <IoIosArrowUp />
              </h2>
            </div>

            <div className="mt-4 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span className="flex gap-1">
                  Under
                  <FaRupeeSign  className="mr-1 my-1" />2 500.00
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span className="flex gap-1">
                  <FaRupeeSign  className="mr-1 my-1" />2 501.00-
                  <FaRupeeSign  className="mr-1 my-1" />
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* (right section) */}
        {/* products */}
        <div className="h-100vh w-[70%] container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* image 1 */}
          <div data-aos="fade-up">
            <img src="i1.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Force 1 Mid &apos;07</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />
                10 795.00
              </h4>
            </div>
          </div>

          {/* image 2 */}
          <div data-aos="fade-up">
            <img src="i2.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">
                Nike Court Vision Low Next Nature
              </h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />4 995.00
              </h4>
            </div>
          </div>

          {/* image 3 */}
          <div data-aos="fade-up">
            <img src="i3.png" alt="bshoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Force 1 PLATFORM</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 695.00
              </h4>
            </div>
          </div>

          {/* image 4 */}
          <div data-aos="fade-up">
            <img src="i4.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Force 1 React</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />
                13 295.00
              </h4>
            </div>
          </div>

          {/* image 5 */}
          <div data-aos="fade-up">
            <img src="i5.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Promo Eclusion</h4>
              <h4 className="font-bold text-sm">Air Jordan 1 Elevate Low</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />
                11 895.00
              </h4>
            </div>
          </div>

          {/* image 6 */}
          <div data-aos="fade-up">
            <img src="i6.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Standard Issue</h4>
              <p className="text-gray-500">Women&apos;s Basketball Jersey</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 895.00
              </h4>
            </div>
          </div>

          {/* image 7 */}
          <div data-aos="fade-up">
            <img src="i7.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">
                Promo Exclusion
              </h4>
              <h4 className="font-bold text-sm">Nike Dunk Low Retro SE</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />9 695.00
              </h4>
            </div>
          </div>

          {/* image 8 */}
          <div data-aos="fade-up">
            <img
              src="i8.png"
              alt="Short-Sleeve"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">
                Sustainable Material
              </h4>
              <h4 className="font-bold text-sm">Nike Dri-FIT UV Hyverse</h4>
              <p className="text-gray-500">
                Men&apos;s Short-Sleeve Graphic Fitness Top
              </p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 495.00
              </h4>
            </div>
          </div>

          {/* image 9 */}
          <div data-aos="fade-up">
            <img src="i9.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Court Vision Low</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />5 695.00
              </h4>
            </div>
          </div>

          {/* image 10 */}
          <div data-aos="fade-up">
            <img
              src="i10.png"
              alt="Men's Short-Sleeve"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Dri-FIT Ready</h4>
              <p className="text-gray-500">Men&apos;s Short-Sleeve Fitness Top</p>
              <p className="text-gray-500">3 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 495.00
              </h4>
            </div>
          </div>

          {/* image 11 */}
          <div data-aos="fade-up">
            <img
              src="i11.png"
              alt="Biker Shorts"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">
                Nike One Leak Protection: Period
              </h4>
              <p className="text-gray-500">
                Women&apos;s Mid-Rise 18cm (approx.) Biker Shorts
              </p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />3 395.00
              </h4>
            </div>
          </div>

          {/* image 12 */}
          <div data-aos="fade-up">
            <img
              src="i12.png"
              alt="Kids' Shoe"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Force 1 LV8 3</h4>
              <p className="text-gray-500">Older Kids&apos; Shoe</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />7 495.00
              </h4>
            </div>
          </div>

          {/* image 13 */}
          <div data-aos="fade-up">
            <img
              src="i13.png"
              alt="Women's Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Blazer Low Platform</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 195.00
              </h4>
            </div>
          </div>

          {/* image 14 */}
          <div data-aos="fade-up">
            <img
              src="i14.png"
              alt="Women's Shoe"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Force 1 &apos;07</h4>
              <p className="text-gray-500">Women&apos;s Shoe</p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 195.00
              </h4>
            </div>
          </div>

          {/* image 15 */}
          <div data-aos="fade-up">
            <img
              src="i15.png"
              alt="Sleeveless Top"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Pro Dri-FIT</h4>
              <p className="text-gray-500">Men&apos;s Tight-Fit Sleeveless Top</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />1 495.00
              </h4>
            </div>
          </div>

          {/* image 16 */}
          <div data-aos="fade-up">
            <img
              src="i16.png"
              alt="Men's Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Dunk Low Retro</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 695.00
              </h4>
            </div>
          </div>

          {/* image 17 */}
          <div data-aos="fade-up">
            <img
              src="i17.png"
              alt="Women's Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Max SC</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />5 995.00
              </h4>
            </div>
          </div>

          {/* image 18 */}
          <div data-aos="fade-up">
            <img
              src="i18.png"
              alt="Running Top"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Dri-FIT UV Miler</h4>
              <p className="text-gray-500">Men&apos;s Short-Sleeve Running Top</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />1 695.00
              </h4>
            </div>
          </div>

          {/* image 19 */}
          <div data-aos="fade-up">
            <img
              src="i19.png"
              alt="Kids' Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Air Max SYSTM</h4>
              <p className="text-gray-500">Older Kids&apos; Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />6 495.00
              </h4>
            </div>
          </div>

          {/* image 20 */}
          <div data-aos="fade-up">
            <img
              src="i20.png"
              alt="Sports Bra"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Alate All U</h4>
              <p className="text-gray-500">
                Women&apos;s Light-Support Lightly Lined U-Neck Printed Sports Bra
              </p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 195.00
              </h4>
            </div>
          </div>

          {/* image 21 */}
          <div data-aos="fade-up">
            <img
              src="i21.png"
              alt="Women's Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Court Legacy Lift</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />7 495.00
              </h4>
            </div>
          </div>

          {/* image 22 */}
          <div data-aos="fade-up">
            <img src="i22.png" alt="Bra Tank" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Swoosh</h4>
              <p className="text-gray-500">
                Women&apos;s Medium-support Padded Sports Bra Tank
              </p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />3 095.00
              </h4>
            </div>
          </div>

          {/* image 23 */}
          <div data-aos="fade-up">
            <img src="i23.png" alt="shoes" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike SB Zoom Janoski OG+</h4>
              <p className="text-gray-500">Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 595.00
              </h4>
            </div>
          </div>

          {/* image 24 */}
          <div data-aos="fade-up">
            <img
              src="i24.png"
              alt="Running Tank"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">
                Nike Dri-FIT Run Division Rise 365
              </h4>
              <p className="text-gray-500">Men&apos;s Running Tank</p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />3 495.00
              </h4>
            </div>
          </div>

          {/* image 25 */}
          <div data-aos="fade-up">
            <img src="i25.png" alt="shorts" className="w-[348px] h-[348px]" />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Dri-FIT Challenger</h4>
              <p className="text-gray-500">
                Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
              </p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 495.00
              </h4>
            </div>
          </div>

          {/* image 26 */}
          <div data-aos="fade-up">
            <img
              src="i26.png"
              alt="men'sshoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Jordan Series ES</h4>
              <p className="text-gray-500">Men&apos;s Shoes</p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />7 495.00
              </h4>
            </div>
          </div>

          {/* image 27 */}
          <div data-aos="fade-up">
            <img
              src="i27.png"
              alt="Woven Jacket"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Outdoor Play</h4>
              <p className="text-gray-500">
                Older Kids&apos; Oversized Woven Jacket
              </p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />3 895.00
              </h4>
            </div>
          </div>

          {/* image 28 */}
          <div data-aos="fade-up">
            <img
              src="i28.png"
              alt="Woven Shorts"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Sportswear Trend</h4>
              <p className="text-gray-500">
                Older Kids&apos; (Girls&apos;) High-waisted Woven Shorts
              </p>
              <p className="text-gray-500">2 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />2 495.00
              </h4>
            </div>
          </div>

          {/* image 29 */}
          <div data-aos="fade-up">
            <img
              src="i29.png"
              alt="Women's Shoes"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike Blazer Low &apos;77 Jumbo</h4>
              <p className="text-gray-500">Women&apos;s Shoes</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />8 595.00
              </h4>
            </div>
          </div>

          {/* image 30 */}
          <div data-aos="fade-up">
            <img
              src="i30.png"
              alt="Skate Shoe"
              className="w-[348px] h-[348px]"
            />
            <div className="text-start">
              <h4 className="font-bold text-sm text-red-600">Just In</h4>
              <h4 className="font-bold text-sm">Nike SB Force 58</h4>
              <p className="text-gray-500">Skate Shoe</p>
              <p className="text-gray-500">1 Colour</p>
              <h4 className="font-bold text-base flex">
                MRP:
                <FaRupeeSign  className="mr-1 my-1" />5 995.00
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* related categories  */}

      <div className="mt-12 px-6 md:px-20 lg:px-32">
        <h1 className="font-bold text-2xl mx-7 mb-5">Related Categories</h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <span className="px-6 py-2 hover:text-gray-600">
            Best Selling Products
          </span>
          <span className="px-6 py-2 hover:text-gray-600">Best Shoes</span>
          <span className="px-6 py-2 hover:text-gray-600">
            New Basketball Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">
            New Football Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">New Men&apos;s Shoes</span>
          <span className="px-6 py-2 hover:text-gray-600">
            New Running Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">
            Best Men&apos;s Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">
            New Jordan Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">
            Best Women&apos;s Shoes
          </span>
          <span className="px-6 py-2 hover:text-gray-600">
            Best Training & Gym
          </span>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
