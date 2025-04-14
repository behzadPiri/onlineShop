import Image from "next/image";

const ShoppingCart = () => {
    return (
        <div className="mx-auto max-w-screen-lg sm:mb-6 px-4 py-4">

            <h1 className="text-2xl font-bold mb-6 text-right">سبد خرید شما</h1>

            <div
                className="grid grid-cols-1 md:grid-cols-12 gap-4 shadow-md shadow-gray-300 rounded-lg overflow-hidden p-4 bg-white">

                {/* تصویر محصول */}
                <div className="md:col-span-3 h-44 relative">
                    <Image
                        src="https://marketplace.canva.com/Pyr_Y/MAEzzXPyr_Y/1/s2/canva-anthurium-on-pink-background-MAEzzXPyr_Y.jpg"
                        alt="محصول"
                        fill
                        className="object-cover rounded-md"
                        sizes="(max-width: 768px) 100vw, 25vw"
                    />
                </div>

                {/* جزئیات محصول */}
                <div className="md:col-span-9 flex flex-col justify-between space-y-3 text-right">
                    <div>
                        <h2 className="text-lg font-semibold mb-1">نام محصول</h2>
                        <p>قیمت واحد: <span className="text-green-600 font-bold">200 تومان</span></p>
                        <p>تعداد: <span className="text-green-600 font-bold">3 عدد</span></p>
                    </div>

                    {/* دکمه‌های افزایش/کاهش */}
                    <div className="flex items-center gap-4 mt-2">
                        <button
                            title="افزایش تعداد"
                            className="cursor-pointer bg-sky-600 w-10 h-10 text-white text-lg rounded-xl hover:bg-sky-700 transition"
                        >
                            +
                        </button>
                        <span className="text-lg font-bold">4</span>
                        <button
                            title="کاهش تعداد"
                            className=" cursor-pointer bg-sky-600 w-10 h-10 text-white text-xl rounded-xl hover:bg-sky-700 transition"
                        >
                            -
                        </button>
                    </div>
                </div>
            </div>

            {/* بخش کد تخفیف */}
            <div className="mt-10 shadow shadow-gray-300 rounded-lg p-4 text-right">
                <h3 className="font-bold text-lg mb-2">کد تخفیف</h3>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <input
                        type="text"
                        placeholder="کد تخفیف را وارد کنید"
                        className="border p-2 px-3 text-gray-700 rounded-md focus:outline-none w-full sm:w-auto"
                    />
                    <button className="bg-sky-600 cursor-pointer text-white py-2 px-4 rounded-md hover:bg-sky-700 transition">
                        ثبت کد تخفیف
                    </button>
                </div>
            </div>

            {/* بخش قیمت‌ها */}
            <div className="shadow shadow-gray-300 rounded-lg mt-10 p-4 text-right space-y-2">
                <h3>
                    قیمت کل: <span className="font-bold text-rose-800">۲۰,۰۰۰ تومان</span>
                </h3>
                <h3>
                    میزان سود شما: <span className="font-bold text-green-800">۲,۰۰۰ تومان</span>
                </h3>
                <h3>
                    قیمت نهایی: <span className="font-bold text-green-800">۱۸,۰۰۰ تومان</span>
                </h3>
            </div>



        </div>
    );
};

export default ShoppingCart;
