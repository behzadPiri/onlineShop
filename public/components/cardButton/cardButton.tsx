"use client"

import {useShoppingCartContext} from "@/context/shoppingCartContext";

const CardButton = () => {
    const {cartItems} = useShoppingCartContext()

    return (
        <div className="flex flex-row-reverse">
            <button className="bg-sky-600 w-11 h-11 text-white text-lg rounded-xl cursor-pointer">+</button>
            <span className="mx-4 text-lg font-bold items-center justify-center flex">4</span>
            <button className="bg-sky-600 w-11 h-11 text-white text-xl rounded-xl cursor-pointer">-</button>
        </div>
    );
};
export default CardButton
