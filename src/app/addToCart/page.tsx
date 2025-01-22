import { CartProvider } from "@/context/CartContext";
import type { AppProps } from "next/app";

interface CustomProps extends AppProps{
    customProp ?: string;
}

export default function App({ Component, pageProps} : CustomProps) {
    return(
        <CartProvider>
            <Component {...pageProps}/>
            useCart
        </CartProvider>
    )
}