"use client"
import {createContext, ReactNode, useState,Dispatch,SetStateAction} from "react";

interface ShoppingCartContextType {
    cartItems: TCartItems[];
    setCartItems: Dispatch<SetStateAction<TCartItems[]>>;
}
const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(undefined);

interface ShoppingCartProviderProps {
    children: ReactNode;
}

type TCartItems = {
    id: number,
    qty: number,
}

const ShoppingCartContextProvider = ({children}: ShoppingCartProviderProps) => {

    const [cartItems, setCartItems] = useState<TCartItems[]>([])

    return (
        <ShoppingCartContext.Provider value={{cartItems,setCartItems}}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
export default ShoppingCartContextProvider
