"use client";

import { useWishlist } from "@/context/WishlistContext";
import React from "react";
import Link from "next/link";

export default function wishlist()  {
  const { wishlist, removeFromWishlist, clearWishList } = useWishlist();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">MY WISHLIST</h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col w-full items-center justify-center mt-0">
          <h1 className="font-semibold text-xl">Your Wishlist is Empty</h1>
          <Link href="/">
            <button className="bg-yellow-300 text-red-500 py-2 px-4 rounded mt-6">
              Shop Now...
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <button className="bg-yellow-300 text-red-500 py-2 px-4 rounded mt-6"
          onClick={clearWishList}>
            Remove from Wishlist
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {wishlist.map((product) => (
              <div key={product.id} className="border p-4">
                <Link href={`/all-Products/${product.id}`}>
                  <img src={product.imageUrl} alt={product.name} className="w-full mb-4" />
                </Link>
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p>Rs. {product.price}</p>
                <button
                  className="bg-yellow-300 text-red-500 py-2 px-4 rounded mt-6"
                  onClick={() => removeFromWishlist(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
