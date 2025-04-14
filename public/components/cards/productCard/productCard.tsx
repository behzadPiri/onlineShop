import Link from "next/link";
import {IProduct} from "@/app/store/page";

const ProductCard = (product:IProduct) => {
    return (

        <Link
        href={`/store/${product.id}`}
            className="group w-full rounded-xl shadow-md overflow-hidden transition hover:shadow-lg bg-white cursor-pointer flex flex-col ">
            {/* تصویر محصول */}
            <div className="relative w-full h-56 sm:h-64 md:h-72">
                <img
                    src={product.image}
                    alt={product.title || "تصویر محصول"}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* توضیحات */}
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-base sm:text-lg font-semibold line-clamp-1">{product.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                <span className="text-rose-600 font-bold text-base sm:text-lg">{product.price} تومان</span>
            </div>
        </Link>
    );
};
export default ProductCard
