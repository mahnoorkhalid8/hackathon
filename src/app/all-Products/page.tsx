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
import products from "../../lib/product";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";

const AllProducts = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation happens only once
    });
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                <FaRupeeSign className="mr-1 my-1" />2 500.00
              </span>
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className=" border-gray-400 border-solid w-4 h-4"
              />
              <span className="flex gap-1">
                <FaRupeeSign className="mr-1 my-1" />2 501.00-
                <FaRupeeSign className="mr-1 my-1" />
              </span>
            </label>
          </div>
        </div>

      {/* sidebar (for mobile) */}
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
                  <FaRupeeSign className="mr-1 my-1" />2 500.00
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" border-gray-400 border-solid w-4 h-4"
                />
                <span className="flex gap-1">
                  <FaRupeeSign className="mr-1 my-1" />2 501.00-
                  <FaRupeeSign className="mr-1 my-1" />
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* (right section) */}
        {/* searchbar component */}
        <div className="container py-4">
        <Searchbar onSearch={setSearchQuery} />
        <div className="h-100vh w-[70%] container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <Link
                href={`/product/${product.id}`}
              >
                <div
                  key={product.id}
                  className="border-solid shadow-md"
                  data-aos="zoom-out"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[348px] h-[348px]"
                  />
                  <div className="text-start">
                    <h4 className="font-bold text-sm text-red-600">
                      {product.status}
                    </h4>
                    <h4 className="font-bold text-sm">{product.name}</h4>
                    <p className="text-gray-500">{product.type}</p>
                    <p className="text-gray-500">{product.color}</p>
                    <h4 className="font-bold text-base flex">
                      MRP:
                      <FaRupeeSign className="mr-1 my-1" />
                      {product.price}
                    </h4>
                    
                  </div>
                </div>
              </Link>
            ))}
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
            <span className="px-6 py-2 hover:text-gray-600">
              New Men&apos;s Shoes
            </span>
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
