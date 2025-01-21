"use client";

import React, { useEffect } from "react";
import { useState, useContext, createContext } from "react";

interface Product {
    id: string;
    name: string;
    price: string;
}

interface CartContextProps {
    cart: Product[];
    setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({children} : {children: React.ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

    // save cart items from local storage
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // save cart items to local storage
    useEffect(() => {
        localStorage.setItem( "cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value= {{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext (CartContext);
    if(!context) {
        throw new Error("useCart must be within a CartProvider");
    };
    return context;
}