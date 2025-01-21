"use client";

import React, { useContext, useState, createContext } from 'react';
import { ReactNode } from 'react';

interface WishlistItem {
    id: "string";
    image: "string";
    name: "string";
    price: "string";
    color: "string";
    type: "string";
    status: "string";
}

interface WishlistContextType {
    wishlist: WishlistItem[];
    addToWishlist: (items: WishlistItem) => void;
    removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext <WishlistContextType | undefined> (undefined);

export const WishlistProvider = ({children} : {children: ReactNode}) => {
    const [wishlist, setWishlist] = useState <WishlistItem[]> ([]);

    const addToWishlist = (item: WishlistItem) => {
        setWishlist((prev) => {
            if (!prev.find((wishlistItem) => wishlistItem.id === item.id)) {
                return [...prev, item];
            }
            return prev;
        });
    };

    const removeFromWishlist = (id: string) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <WishlistContext.Provider value = {{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WishlistContext.Provider>
    );
};

    export const useWishlist = () => {
        const context = useContext(WishlistContext);
        console.log("Context Value:" , context);
        if (!context) {
            throw new Error ("useWishlist must be used within a WishlistProvide");
        };
        return context;
    };