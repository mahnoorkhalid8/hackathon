import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps} :any) {
    return(
        <CartProvider>
            <Component {...pageProps}/>
            useCart
        </CartProvider>
    )
}