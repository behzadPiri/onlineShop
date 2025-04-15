"use client"
import {ChangeEvent, useState} from "react";
import {IProduct} from "@/app/store/page";
import axios from "axios";
import {useRouter} from "next/navigation";

const FormCreateProduct = () => {

    const [product, setProduct] = useState({} as IProduct)

    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setProduct({...product, [name]: value,})
    }

    const handleSubmit = async () => {
        const productData = {
            id: Math.floor(Math.random() * 10000).toString(),
            title: product.title,
            price: product.price,
            image: product.image,
            description: product.description,
        }
        console.log("productData",productData)
        try {
            const result = await axios({
                url: "http://localhost:9000/products",
                method: "POST",
                data: productData
            })
            console.log("result",result)
            if (result.status === 201) {
                setProduct({} as IProduct)
                router.replace("/store")
            }
        } catch (err) {
            console.log("error", err)
        }
    }
    const requiredFields: (keyof IProduct)[] = ['image', 'title', 'description', 'price'];

    const isDisabled = !requiredFields.every((key) => Boolean(product[key]));

    return (

        <div className="mt-5 p-4 relative z-10 bg-white border shadow border-gray-200 rounded-xl sm:mt-10 md:p-10  ">
            <form>
                <div className="mb-4 sm:mb-8">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium ">عنوان محصول</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        onChange={handleChange}
                        placeholder="عنوان محصول"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                </div>

                <div className="mb-4 sm:mb-8">
                    <label htmlFor="image" className="block mb-2 text-sm font-medium ">تصویر محصول</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        placeholder="تصویر محصول"
                        className="py-2.5 sm:py-3 border px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                </div>

                <div className="mb-4 sm:mb-8">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium ">قیمت محصول</label>
                    <input
                        id="price"
                        type="text"
                        name="price"
                        onChange={handleChange}
                        placeholder="قیمت محصول"
                        className="py-2.5 sm:py-3 border px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium ">توضیحات محصول</label>
                    <div className="mt-1">
                            <textarea
                                id="description"
                                rows={4}
                                name="description"
                                onChange={handleChange}
                                placeholder="توضیحات محصول"
                                className="py-2.5 border max-h-44 min-h-44 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            />
                    </div>
                </div>

                <div className="mt-6 grid">
                    <button
                        type="button"
                        disabled={isDisabled}
                        onClick={handleSubmit}
                        className={`w-full ${isDisabled ? "lg:cursor-no-drop" : "lg:cursor-pointer"} py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg  disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-700`}>
                        ثبت محصول
                    </button>
                </div>
            </form>
        </div>

    );
};
export default FormCreateProduct
