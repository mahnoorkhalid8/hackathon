"use client";

import React from 'react';
import { RiShoppingBagLine } from "react-icons/ri";
import { TbMessage2Minus } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa6";
import { PiMailbox } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { useCart } from '@/context/CartContext';


const Checkout = () => {
    const {cart, setCart} = useCart();

  return (
    
    <div className='min-h-screen p-4'>
        {/* header */}
        <div className='flex justify-between items-center px-4 py-3 md:px-6 bg-gray-50 '>
            <img src="nike.png" alt="logo" className='w-10 h-10 md:w-12 md:h-12'/>
            <div className='flex gap-4 md:gap-6 text-sm md:text-base text-black'>
                <span><p>000 800 100 9538</p></span>
                <span><TbMessage2Minus className='text-xl'/></span>
                <span><RiShoppingBagLine className='text-xl'/></span>
            </div>
        </div>

        {/* main section */}
        <div className='flex flex-col md:flex-row justify-evenly space-y-6 md:space-y-0 md:space-x-10 mx-auto p-4 md:p-8'>
        
        {/* left section */}
        <div className='md:w-[40%] space-y-6'>
            <h1 className='font-semibold text-xl md:text-2xl'>How would you like to get your order?</h1>

            <p className='text-sm md:text-lg text-gray-400 mt-2'>Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the 
            KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC 
            will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) 
            for all orders and returns. If your KYC does not match your shipping address, please click the link 
            for more information. <a href="#" className='hover:text-black'><u>Learn More</u></a></p>  

            <div className="flex border-2 border-black border-solid text-lg font-semibold items-center gap-2 p-4 mt-4 rounded-md">
            <PiMailbox className="my-1 text-xl" /><h2>Deliver It</h2>
            </div>
        
            <h1 className='font-semibold text-3xl py-4 mt-5'>Enter your name and address:</h1>

            {/* form */}
            <form className='space-y-4'>
        <fieldset className='flex flex-col space-y-2'>
            <input type="text" placeholder='First Name' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
       
            <input type="text" placeholder='Last Name' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <fieldset className='space-y-2'>
            <input type="text" placeholder='Address Line 1' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <h6 className='text-gray-400 text-xs mx-4'>We do not ship to P.O.boxes</h6>

        <fieldset className=' space-y-2'>
            <input type="text" placeholder='Addrsess Line 2' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
  
            <input type="text" placeholder='Address Line 3' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <div className='flex flex-col md:flex-row gap-2'>
            <input type="text" placeholder='Postal Code' className='text-black flex-1 w-full p-3 border-2 border-black rounded-md mb-3'/>
        
            <input type="text" placeholder='Locality' className='text-black flex-1 w-full p-3 border-2 border-black rounded-md mb-3'/>
        </div>

        <div className='flex flex-col md:flex-row  gap-2'>
       
            <select className='w-full text-gray-400 p-3.5 border-2 border-black rounded-md mb-3'>
                <option value="State/Territory">State/Territory</option>
            </select>
 
            <input type="text" placeholder='India' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
     
        </div>
    </form>

        {/* checkbox */}
        <div className='flex items-center gap-2 mt-4'>
            <input type="checkbox" className='w-5 h-5'/>
            <p>Save this address to my profile</p>
        </div>

        <div className='flex items-center gap-2 mt-4 '>
            <input type="checkbox" className='w-5 h-5'/>
            <p>Make this my preferred address</p>
        </div>

        {/* contact info */}
        <h1 className='font-semibold text-3xl py-4 mt-5'>What&apos;s your contact information?</h1>
        
        <fieldset className='mt-3'>
            <input type="email" placeholder='Email' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <h6 className='text-gray-500 text-xs mx-4'>A confirmation email will be sent after checkout.</h6>

        <fieldset className='mt-3'>
            <input type="tel" placeholder='Phone Number' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <h6 className='text-gray-500 text-xs mx-4'>A carrier might contact you to confirm delivery.</h6>

        {/* PAN */}
        <h1 className='font-semibold text-3xl py-4 mt-5'>What&apos;s your PAN?</h1>

        <fieldset className='mt-3'>
            <input type="text" placeholder='PAN' className='text-black w-full p-3 border-2 border-black rounded-md mb-3'/>
        </fieldset>

        <h6 className='text-gray-500 text-sm mx-4'>Enter your PAN to enable payment with UPI, Net Banking or local card methods</h6>

        {/* checkbox */}
        <div className='flex items-center gap-2 mt-6'>
            <input type="checkbox" className='w-5 h-5'/>
            <p className='text-gray-400'>Save PAN details to Nike Profile</p>
        </div>

        <div className='flex gap-2 mt-6 '>

            <input type="checkbox" className='w-5 h-5'/>
            <p className='text-gray-400'>I have read and consent to eShopWorld processing my information in accordance with the 
            <a href="#" className='hover:text-black'><u> Privacy Statement </u></a> 
            and <a href="#" className='hover:text-black'><u> Cookie Policy </u></a>. 
            eShopWorld is a trusted Nike partner.</p>
        </div>

        {/* button */}
        <button className="bg-gray-100 text-gray-500 mt-20 text-center w-full py-5 mb-8 text-xl rounded-full">Continue</button>

        <hr/>
        <h1 className='font-semibold text-xl p-5'>Delivery</h1>

        <hr />
        <h1 className='font-semibold text-xl p-5'>Shipping</h1>

        <hr />
        <h1 className='font-semibold text-xl p-5'>Billing</h1>

        <hr />
        <h1 className='font-semibold text-xl p-5'>Payment</h1>

 </div>
        
        {/* right section */}
         <div className='w-full md:w-[30%] space-y-3'>
            <h1 className='font-semibold text-2xl'>Order Summary</h1>
        
        <div className='space-y-2 mt-4'>
            <div className='flex justify-between text-gray-400'>
                <p>Subtotal</p>
                <p className='flex'>MRP:<FaRupeeSign  className=' mr-1 my-1'/>20 890.00</p>
            </div>
        
            <div className='flex justify-between text-gray-400'>
                <p>Delivery/Shipping</p>
                <p>Free</p>
            </div>
            <hr />
        
            <div className='flex justify-between text-gray-700'>
                <p>Total</p>
                <p className='flex text-black'>MRP:<FaRupeeSign  className=' mr-1 my-1'/>20 890.00</p>
            </div>
        </div>

        <hr />

        <p className='text-gray-500 text-[11px]'>(The total reflects the price of your order, including all duties and taxes)</p>
        
        <h1 className='font-bold text-lg pt-6 mb-4'>Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
            
            <div className='flex justify-between gap-4 md:gap-4 mt-3 md:mt-5'>
                <div className='flex gap-4 w-52 h-52'>
                <img src="Image (4).png" alt="Men's short sleeves"  />
                </div>

                <div className='w-52 h-52 space-y-1 md:space-y-3'>
                <p className='text-black'>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                <p className='text-gray-400'>Qty 1</p>
                <p className='text-gray-400'>Size L</p>
                <p className='flex text-gray-400'><FaRupeeSign  className=' mr-1 my-1'/>3 895.00</p>
                </div>
            </div>

            <div className='flex justify-between gap-4 md:gap-4'>
                <div className='flex gap-4 w-52 h-52'>
                <img src="Image (2).png" alt="Men's Shoes"  />
                </div>

                <div className='w-52 h-52 space-y-1 md:space-y-3'>
                <p className='text-black'>Nike Air Max 97 SE Men&apos;s Shoes</p>
                <p className='text-gray-400'>Qty 1</p>
                <p className='text-gray-400'>Size UK 8</p>
                <p className='flex text-gray-400'><FaRupeeSign  className=' mr-1 my-1'/>16 995.00</p>
                </div>
            </div>

            </div>
</div>

{/* cart item section */}
            <h2>Cart Items</h2>
            {cart.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>{cart.map((item) => (
                    <li key={item.id} className='flex gap-2 items-center'>
                        <div>
                            <h2>{item.name}</h2>  
                            <p>${item.price}</p>
                        </div>
                        <button onClick={() =>setCart ((prevCart) =>
                        prevCart.filter((product) => product.id !== item.id) )}>
                        Remove</button>
                    </li>
                ))}
                </ul>
            )};
    

    {/* footer */}
    <div className='flex flex-col md:flex-row justify-between items-center p-6 w-full bottom-0 text-sm bg-black'>
       
        <div className='flex gap-7 text-gray-400 mt-4 md:mt-0'>
            <span className='flex'><FaLocationDot />India</span>
            <span className='flex'><FaRegCopyright/> 2023 NIKE, Inc. All Rights Reserved</span>
        </div>

        <div className='flex gap-7 text-gray-400 mt-4 md:mt-0'>
            <Link href="#">Terms of Sale</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Nike Privacy Policy</Link>
        </div>  

        <div className='flex flex-wrap justify-center md:justify-end gap-2 mt-4 md:mt-0'>
           <img src="f1.png" alt="VISA" className='w-[45px] h-[27px]'/>
           <img src="f2.png" alt="VISA Electron" className='w-[45px] h-[27px]'/>
           <img src="f3.png" alt="Master Card" className='w-[45px] h-[27px]'/>
           <img src="f4.png" alt="Maestro" className='w-[45px] h-[27px]'/>
           <img src="f5.png" alt="AMERICAN EXPRESS" className='w-[45px] h-[27px]'/>
           <img src="f6.png" alt="Diners Club" className='w-[45px] h-[27px]'/>
           <img src="f7.png" alt="DISCOVER" className='w-[45px] h-[27px]'/>
           <img src="f8.png" alt="Washington" className='w-[45px] h-[27px]'/>
           <img src="f9.png" alt="paytm" className='w-[45px] h-[27px]'/>
           <img src="f10.png" alt="LIPI" className='w-[45px] h-[27px]'/>
           <img src="f11.png" alt="JCB" className='w-[45px] h-[27px]'/> 
        </div>

    </div>

    </div>
  )
}

export default Checkout