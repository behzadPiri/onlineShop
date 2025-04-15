import Image from "next/image";
import {CardButton} from "@/public/components";
import {IProduct} from "@/app/store/page";


const ShopCard = (product: IProduct) => {

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-12 gap-4 shadow-md shadow-gray-300 rounded-lg overflow-hidden p-4 bg-white mb-4">

            {/* تصویر محصول */}
            <div className="md:col-span-3 h-44 relative">
                <Image
                    src={product?.image}
                    alt="محصول"
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, 25vw"
                />
            </div>

            {/* جزئیات محصول */}
            <div className="md:col-span-9 flex flex-col justify-between space-y-3 text-right">
                <div>
                    <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                    <p>قیمت واحد: <span className="text-green-600 font-bold">{product.price} تومان</span></p>
                    <p>تعداد: <span className="text-green-600 font-bold">{product.qty} عدد</span></p>
                </div>

                {/* دکمه‌های افزایش/کاهش */}
                <CardButton id={product.id.toString()}/>

            </div>
        </div>
    );
};
export default ShopCard;
