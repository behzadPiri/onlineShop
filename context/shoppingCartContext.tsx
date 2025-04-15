"use client"
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {IProduct} from "@/app/store/page";

interface ShoppingCartContextType {
    cartItems: TCartItems[];
    increaseToCart: (id: number) => void;
    decreaseToCart: (id: number) => void;
    removeProductFromCart: (id: number) => void;
    getQtyProduct: (id: number) => number;
    getTotalPrice: (products: IProduct[]) => number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext);
}

interface ShoppingCartProviderProps {
    children: ReactNode;
}

export type TCartItems = {
    id: number,
    qty: number,
}


const ShoppingCartContextProvider = ({children}: ShoppingCartProviderProps) => {

    const [cartItems, setCartItems] = useState<TCartItems[]>([])

    let AllCartItems = [...cartItems]

    const increaseToCart = (id: number) => {

        const existingProducts = cartItems.find(item => item.id === id)

        if (existingProducts) {
            let findIndexProduct = cartItems.findIndex(item => item.id === id)
            AllCartItems[findIndexProduct] = {id, qty: existingProducts.qty + 1}
            setCartItems(AllCartItems)
        } else {
            setCartItems([...cartItems, {id, qty: 1}])
        }
    }

    const decreaseToCart = (id: number) => {

        const existingProducts = cartItems.find(item => item.id === id)
        if (existingProducts && existingProducts.qty == 0) {
            const products = cartItems.filter(item => item.id !== id)
            setCartItems(products)
        } else if (existingProducts && existingProducts.qty > 0) {
            let findIndexProduct = cartItems.findIndex(item => item.id === id)
            AllCartItems[findIndexProduct] = {id: id, qty: existingProducts.qty - 1}
            setCartItems(AllCartItems)
        }
    }

    const removeProductFromCart = (id: number) => {

        const existingProducts = cartItems.find(item => item.id === id)
        if (existingProducts) {
            const products = cartItems.filter(item => item.id !== id)
            setCartItems(products)
        } else {
            setCartItems(AllCartItems)
        }
    }

    const getQtyProduct = (id: number) => {
        return cartItems.find(item => item.id === id)?.qty || 0
    }

    const getTotalPrice =  (products: IProduct[]) => {
        return cartItems.reduce((price: number, item: TCartItems) => {
            let selectProductPrice = products?.find(product => parseInt(product.id) === item.id)?.price || 0;
            return price + (item.qty * selectProductPrice)
        }, 0)
    }

    useEffect(() => {
        let existingStoreCart=localStorage.getItem("cartItems");
        if (existingStoreCart){
            setCartItems(JSON.parse(existingStoreCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <ShoppingCartContext.Provider
            value={{cartItems, increaseToCart, decreaseToCart, getQtyProduct, removeProductFromCart, getTotalPrice}}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
export default ShoppingCartContextProvider
