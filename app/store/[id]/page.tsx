import {IProduct} from "@/app/store/page";
import {CardButton} from "@/public/components";
import {numberFormatters} from "@/utils/numberFormatters";

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
                        قیمت: {numberFormatters(product.price)} تومان
                    </p>

                </div>
            </div>

            <div className="flex flex-row-reverse">
                <CardButton id={product?.id}/>
            </div>

        </div>
    );
};
export default Product
