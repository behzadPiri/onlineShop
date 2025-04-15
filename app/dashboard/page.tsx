import {FormCreateProduct} from "@/public/components";

const Dashboard = () => {
    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="mx-auto max-w-2xl">
                <div className="text-center">
                    <h2 className="text-xl text-gray-800 font-bold sm:text-3xl ">
                        ثبت محصول جدید
                    </h2>
                </div>

                <FormCreateProduct/>

            </div>
        </div>


    );
};
export default Dashboard
