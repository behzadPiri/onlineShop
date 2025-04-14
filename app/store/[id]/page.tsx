import {IProduct} from "@/app/store/page";

interface IProductProps {
    params: Promise<{id: string}>;
    searchParams: Promise<{}>;
}


const Product =async (props:IProductProps) => {

    const {id}=await props.params;

    const result=await fetch(`http://localhost:9000/products/${id}`)
    const product = await result.json() as IProduct;


    return (
        <div className="px-10 sm:px-12 md:max-w-screen-lg mx-auto mt-12 pb-8">

            <div className="flex flex-col sm:flex-row gap-6">

            {/*تصویر محصول*/}
                <div className="w-full sm:w-2/5 max-h-80 bg-purple-700 items-center justify-center rounded-xl overflow-hidden cursor-pointer group shadow-md">
                    <img
                        className="object-cover rounded-lg w-full h-full  transition-transform duration-300 sm:group-hover:scale-105"
                        src={product.image}
                        alt={product.title||"Product Image"}/>
                </div>

                {/*توضیحات محصول*/}
                <div className="w-full sm:w-3/5 p-4">
                    <h1 className="font-semibold text-2xl mb-4">
                        {product.title}
                    </h1>
                    <h4 className="font-bold text-base text-gray-600 mb-4 text-justify">
                        {product.description}
                    </h4>
                    <p className="text-rose-500 text-lg font-bold">
                        قیمت: {product.price} تومان
                    </p>

                </div>
            </div>

            <div className="flex flex-row-reverse">
                <button className="bg-sky-600 w-11 h-11 text-white text-lg rounded-xl cursor-pointer">+</button>
                <span className="mx-4 text-lg font-bold items-center justify-center flex">4</span>
                <button className="bg-sky-600 w-11 h-11 text-white text-xl rounded-xl cursor-pointer">-</button>
            </div>

        </div>
    );
};
export default Product
