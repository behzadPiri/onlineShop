"use client"
import axios from "axios";
import {useEffect, useState} from "react";
import {IProduct} from "@/app/store/page";
import {ShopCard} from "@/public/components";
import {numberFormatters} from "@/utils/numberFormatters";
import {useShoppingCartContext} from "@/context/shoppingCartContext";

interface IDiscountCode {
    id: number;
    code: string;
    percentage: number;
}

const ShoppingCart = () => {

    const {cartItems, getTotalPrice} = useShoppingCartContext()
    const [products, setProducts] = useState<IProduct[]>([]);
    const [discountCode, setDiscountCode] = useState("")
    const [totalPriceEnd, setTotalPriceEnd] = useState(0)
    const [discountPrice, setDiscountPrice] = useState(0)

    const getProducts = async () => {

        try {
            const query = cartItems.map(item => `id=${item.id}`).join("&");
            const result = await axios.get(`http://localhost:9000/products?${query}`);
            if (result) {
                const {data} = result;
                await handlerDiscountCode(data)
                const mergedProducts = await data.map((product: IProduct) => {
                    const match = cartItems.find(item => item.id === parseInt(product.id));
                    return {
                        ...product,
                        qty: match?.qty || 0,
                    };
                });
                setProducts(mergedProducts);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const handlerDiscountCode = async (productsList: IProduct[]) => {
        let totalPriceProducts = getTotalPrice(productsList);
        console.log("Total price products", totalPriceProducts);
        try {
            if (Boolean(discountCode)) {
                const result = await axios.get(`http://localhost:9000/discount?code=${discountCode}`);
                if (result.status === 200) {
                    const data = result.data as IDiscountCode[];
                    let discountPriceProducts = totalPriceProducts * (data[0].percentage / 100)
                    let totalPrice = totalPriceProducts - discountPriceProducts;
                    setDiscountPrice(discountPriceProducts);
                    setTotalPriceEnd(totalPrice)
                    setDiscountCode("")
                }

            } else {
                setDiscountPrice(0);
                setTotalPriceEnd(totalPriceProducts)
            }

        } catch (e) {
            console.log("error", e);
        }
    }

    useEffect(() => {
        cartItems.length > 0 && getProducts();
        return () => {
        };
    }, [cartItems,])

    return (
        <div className="mx-auto max-w-screen-lg sm:mb-6 px-4 py-4">

            {cartItems.length > 0 ? (
                <>
                    <h1 className="text-2xl font-bold mb-6 text-right">سبد خرید شما</h1>
                    {
                        products?.map((item, index) => (<ShopCard  {...item} key={index}/>))
                    }


                    {/* بخش کد تخفیف */}
                    <div className="mt-10 shadow shadow-gray-300 rounded-lg p-4 text-right">
                        <h3 className="font-bold text-lg mb-2">کد تخفیف</h3>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                            <input
                                type="text"
                                placeholder="کد تخفیف را وارد کنید"
                                className="border p-2 px-3 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
                                value={discountCode}
                                onChange={(e) => setDiscountCode(e.target.value)}
                            />
                            <button
                                onClick={() => handlerDiscountCode(products)}
                                className="bg-sky-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-sky-700 transition">
                                ثبت کد تخفیف
                            </button>
                        </div>
                    </div>

                    {/* بخش قیمت‌ها */}
                    <div className="shadow shadow-gray-300 rounded-lg mt-10 p-4 text-right space-y-2">
                        <h3>
                            قیمت کل: <span
                            className="font-bold text-rose-800">{numberFormatters(getTotalPrice(products))} تومان</span>
                        </h3>
                        <h3>
                            میزان سود شما: <span
                            className="font-bold text-green-800">{numberFormatters(discountPrice)} تومان</span>
                        </h3>
                        <h3>
                            قیمت نهایی: <span
                            className="font-bold text-green-800">{numberFormatters(totalPriceEnd)} تومان</span>
                        </h3>
                    </div>
                </>

            ) : (
                <div className={"flex justify-center items-center mx-aut py-24"}>
                    <h1 className={"text-xl font-bold mb-2"}>
                        سبد خرید شما خالی است!!!
                    </h1>
                </div>
            )}

        </div>
    );
};

export default ShoppingCart;
