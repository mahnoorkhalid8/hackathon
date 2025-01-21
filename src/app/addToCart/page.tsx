import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps} : {Component: any; pageProps: any}) {
    return(
        <CartProvider>
            <Component {...pageProps}/>
            useCart
        </CartProvider>
    )
}