"use client"

import {useShoppingCartContext} from "@/context/shoppingCartContext";

interface ICardButton {
    id: string;
}

const CardButton = ({id}: ICardButton) => {
    const {removeProductFromCart, increaseToCart,decreaseToCart,getQtyProduct} = useShoppingCartContext()


    return (
        <div className="flex flex-col justify-end items-end w-fit ">
        <div className="flex flex-row-revers">
            <button
                onClick={()=>increaseToCart(parseInt(id))}
                className="bg-sky-600 w-11 h-11 text-white text-lg rounded-xl cursor-pointer">+
            </button>
            <span className="mx-4 text-lg font-bold items-center justify-center flex">
                {
                    getQtyProduct(parseInt(id))
                }
            </span>
            <button
                onClick={()=>decreaseToCart(parseInt(id))}
                className="bg-sky-600 w-11 h-11 text-white text-xl rounded-xl cursor-pointer">-</button>
        </div>
            <button
                className="bg-rose-600 mt-2 px-12 py-2 text-white rounded-md cursor-pointer"
                onClick={()=>removeProductFromCart(parseInt(id))}>حذف</button>
        </div>
    );
};
export default CardButton
