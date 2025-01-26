"use client";

import React, { ReactNode } from "react";
import { useState, useContext, createContext } from "react";

type CartProduct = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    quantity: number;
};

type CartContextType = {
    cart: CartProduct[];
    addToCart: (item: CartProduct) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    updateCartProductQuantity: (id: string, newQuantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children} : {children: ReactNode }) => {
    const [cart, setCart] = useState<CartProduct[]>([]);

    const addToCart = (item: CartProduct) => {
        setCart ((prevCart) => {
            const existingItem = prevCart.find ((cartProduct) => cartProduct.id === item.id);
            if (existingItem) {
                return prevCart.map((cartProduct) => cartProduct.id === item.id ? 
                {...cartProduct, quantity: cartProduct.quantity + 1} : cartProduct);
            }
            return [...prevCart, {...item, quantity: 1}];
        });
    };

    const updateCartProductQuantity = (id: string, newQuantity: number) => {
        setCart ((prevCart) => prevCart.map((item) => item.id === id ? 
        {...item, quantity: Math.max(newQuantity, )} : item )
    );
    };

    const removeFromCart = (id: string) => {
        setCart ((prevCart) => prevCart.filter((cartProduct) => cartProduct.id !== id)
    );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value= {{cart, addToCart, removeFromCart, updateCartProductQuantity, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext (CartContext);
    if(!context) {
        throw new Error("useCart must be within a CartProvider");
    }
    return context;
};