"use client"
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { LuIndianRupee } from "react-icons/lu";

export default function Home() {
  return (
   <div className="h-[5442.36px] w-[1440px] ">
      <div className="flex justify-center mx-4 font-helvetica neue font-bold weight-500 leading-[16px]">Hello Nike App</div>
      <div className="flex justify-center mx-4 font-helvetica neue weight-400 leading-[24px]">Download the app to access everything Nike.
        <span className="flex justify-center mx-4 font-helvetica neue weight-500 leading-[24px] font-semibold underline">Get Your Great</span>
      </div>

     <img src="Image.png" alt="shoes" className="w-[1344px] h-[977px] top-[58px] left-48 flex justify-center mx-20" /> 
   
   <div className="flex flex-col justify-center items-center space-y-4">
    <div className="w-auto h-auto mx-4 py-2">
      <h6 className="font-helvetica neue flex items-center text-center weight-500  leading-[24px]">
        First Look</h6>
    </div>
    <div className="w-auto h-auto top-28">
      <h1 className="font-[helvetica neue] font-bold weight-500 leading-[24px] text-[24px] items-center">
        NIKE AIR MAX PULSE</h1>
    </div>
    <div className="w-auto h-auto top-28">
      <p className="font-helvetica neue font-medium weight-400 leading-[24px] items-center">
      Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
      -designed to push you past your limits and help you go to the max.</p>
    </div>
    <div className="flex justify-center items-center space-x-4 my-4 p-4 rounded-full">
      <button className="bg-black text-white px-4 py-4 rounded-full">Notify Me</button>
      <button className="bg-black text-white px-4 py-4 rounded-full">Shop Air Max</button>
    </div> 
   </div>

{/* 1st div */}
   <div className="flex py-6">
    <div>
      <h1 className="font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">Best of Air Max</h1>
    </div>
    <div className="flex absolute right-6 space-x-6">
      <h6 className="flex font-[helvetica neue] mx-4 weight-500 leading-[24px]">Shop
      <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/></h6>
    </div>
   </div>

   <div className="flex flex-row justify-around mx-20">
      <div>
        <img src="Image (1).png" alt="shoe1" className="w-[441.36px] h-[441.36px]"/>
      </div>
      <div>
        <img src="Image (1).png" alt="shoe2" className="w-[441.36px] h-[441.36px]"/>
      </div>
      <div>
        <img src="Image (2).png" alt="shoe3" className="w-[441.36px] h-[441.36px]"/>
      </div>
  </div>

{/* image content */}
    <div className=" flex justify-between mx-20">
        <div className="text-start mt-4">
          <div className="flex items-center space-x-52">
            <h4 className="flex font-bold text-sm">Nike Air Max Pulse</h4>
            <h4 className="font-medium text-base flex items-center justify-center">
            <LuIndianRupee className="mr-1"/>13 995</h4>
          </div>
          <p className="text-gray-500">Women's Shoes</p>
        </div>

        <div className="text-start mt-4">
          <div className="flex items-center space-x-52">
            <h4 className="flex font-bold text-sm">Nike Air Max Pulse</h4>
            <h4 className="font-medium text-base flex items-center justify-center">
            <LuIndianRupee className="mr-1"/>13 995</h4>
          </div>
          <p className="text-gray-500">Men's Shoes</p>
        </div>

        <div className="text-start mt-4">
          <div className="flex items-center space-x-52">
            <h4 className="flex font-bold text-sm">Nike Air Max 97 SE</h4>
            <h4 className="font-medium text-base flex items-center justify-center">
            <LuIndianRupee className="mr-1"/>16 995</h4>
          </div>
          <p className="text-gray-500">Men's Shoes</p>
        </div>
      </div>

{/* featured div */}
<div className="w-[1344px] h-[977px] top-[1807.36px] left-48 py-8">
    <div>
      <h1 className="py-14 font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">Featured</h1>
    <img src="Image (3).png" alt="featured" className="w-[1344px] h-[700px] flex justify-center mx-20 py-2"/>
    </div>
    <div className="flex flex-col justify-center items-center font-[helvetica neue] px-4 py-4 space-y-3">
      <div>
      <h1 className="font-bold text-4xl leading-[60px]">
        STEP INTO WHAT FEELS GOOD</h1>
      </div>
      <div>
      <p className="text-center text-sm leading-[24px]">
        Cause everyone should know the feeling of running in that perfect pair</p>
      </div>

      <div className="flex justify-center items-center">
      <button className="bg-black text-white pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] rounded-full">Find Your Shoe</button>
      </div> 
    </div>
</div>

{/* gear up div */}
    <div>
      <h1 className="py-6 font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">Gear Up</h1>
    </div>
<div className="container grid-cols-2 flex justify-center">
    <div className="flex justify-center items-center">
      <h6 className="flex text-center font-[helvetica neue] mx-4 weight-500 leading-[24px]">Shop Men's
      <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/></h6>
    </div>
    <div className="flex absolute right-6">
      <h6 className="flex  font-[helvetica neue] mx-4 weight-500 leading-[24px]">Shop Women's
      <IoIosArrowBack className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/>
      <IoIosArrowForward className="my-1 bg-gray-300 w-30 h-30 pt-0.5 pb-0.5 rounded-full hover:border"/></h6>
    </div>
</div>

<div className="container grid-cols-4 flex flex-row justify-between mx-14">
      <div>
        <img src="Image (4).png" alt="blue dress" className="w-[300px] h-[300px]"/>
        <div className="text-start">
          <div className="flex justify-between items-center">
            <h4 className="flex font-bold text-sm">Nike Dri-FIT ADV TechKnit Ultra</h4>
            <h4 className="font-medium text-base flex items-center justify-center ml-4">
            <LuIndianRupee className="mr-1"/>3 895</h4>
          </div>
          <p className="text-gray-500">Men's Short-Sleeves</p>
          <p className="text-gray-500">Running Top</p>
        </div>
      </div>

      <div>
        <img src="Image (5).png" alt="shorts" className="w-[300px] h-[300px]"/> 
        <div className="text-start">
          <div className="flex justify-between items-center">
            <h4 className="flex font-bold text-sm">Nike Dri-FIT Challenger</h4>
            <h4 className="font-medium text-base flex items-center justify-center ">
            <LuIndianRupee className="mr-1"/>2 495</h4>
          </div>
          <p className="text-gray-500">Men's 8cm (approx.) 2-</p>
          <p className="text-gray-500">in-1 Versatile Shorts</p>
        </div> 
      </div>

      <div>
        <img src="Image (6).png" alt="blue dress women" className="w-[300px] h-[300px]"/>
        <div className="text-start">
          <div className="flex justify-between items-center">
            <h4 className="flex font-bold text-sm">Nike Dri-FIT ADV Run Division</h4>
            <h4 className="font-medium text-base flex items-center justify-center ml-4">
            <LuIndianRupee className="mr-1"/>5 295</h4>
          </div>
          <p className="text-gray-500">Women's Long-Sleeve</p>
          <p className="text-gray-500">Running Top</p>
        </div>
      </div>

      <div>
        <img src="Image (7).png" alt="shorts women" className="w-[300px] h-[300px]"/>
        <div className="text-start">
          <div className="flex justify-between items-center ">
            <h4 className="flex font-bold text-sm">Nike Fast</h4>
            <h4 className="font-medium text-base flex items-center justify-center ml-4">
            <LuIndianRupee className="mr-1"/>3 795</h4>
          </div>
          <p className="text-gray-500">Women's Mid-Rise 7/8 Running</p>
          <p className="text-gray-500">Leggings with Pockets</p>
        </div>  
      </div>
</div>

{/* don't miss */}
    <div className="py-20">
      <h1 className="font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">Don't Miss</h1>
      <img src="Image (8).png" alt="coat" className="w-[1344px] h-[700px] flex justify-center mx-20 py-2"/>

      <div className="flex flex-col justify-center items-center font-[helvetica neue] px-4 py-4 space-y-3">
      <div>
      <h1 className="font-bold text-4xl leading-[60px]">
        FLIGHT ESSENTIALS</h1>
      </div>
      <div>
      <p className="text-center text-sm leading-[24px]">
        You built-to-last, all week wears-but with style only Jordan Brand can deliver</p>
      </div>

      <div className="flex justify-center items-center">
      <button className="bg-black text-white pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] rounded-full">Shop</button>
      </div> 
    </div>
    </div>

{/* the essentials */}
    <div className="py-14 space-y-1">
      <h1 className="font-[helvetica neue] font-bold mx-20 h-[27px] W-[161.59px] text-lg weight-500 leading-[28px]">The Essentials</h1>
      </div>
      <div className="flex flex-row justify-around mx-20">
      <div>
        <img src="ess1.png" alt="Men's" className="w-[44opx] h-[540px]"/>
        <h6 className="w-[65px] h-24 bg-white text-black text-sm rounded-full">Men's</h6>
      </div>
      <div>
        <img src="ess2.png" alt="Women's" className="w-[440px] h-[540px]"/>
        <h6 className="w-[65px] h-24 bg-white text-black text-sm rounded-full">Women's</h6>
      </div>
      <div>
        <img src="ess3.png" alt="kids" className="w-[440px] h-[540px]"/>
        <h6 className="w-[65px] h-24 bg-white text-black text-sm rounded-full">kids</h6>
        </div>
  </div>
    
{/* ending */}
<div className='container grid justify-center items-center grid-cols-1 md:grid-cols-4 gap-8 text-base mx-32 -space-x-32'>
  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] weight-500 leading-[24px] w-[38.45px] h-[17px] top-3'>Icons</h4>
      <ul className='space-y-2 font-[helvetica neue] weight-400 leading-[24px] w-[78.45px h-[17px] top-3'>
        <li>Air Force</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 90</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] weight-500 leading-[24px] w-[38.45px] h-[17px] top-3'>Shoes</h4>
      <ul className='space-y-2 font-[helvetica neue] weight-400 leading-[24px] w-[78.45px h-[17px] top-3'>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] weight-500 leading-[24px] w-[38.45px] h-[17px] top-3'>Clothing</h4>
      <ul className='space-y-2 font-[helvetica neue] weight-4500 leading-[24px] w-[78.45px h-[17px] top-3'>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
  </div>

  <div className='space-y-4'>
    <h4 className='font-semibold font-[helvetica neue] weight-500 leading-[24px] w-[38.45px] h-[17px] top-3'>Kids'</h4>
      <ul className='space-y-2 font-[helvetica neue] weight-4500 leading-[24px] w-[78.45px h-[17px] top-3'>
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
  </div>
</div>
   </div>
  );
}


