import {FormLogin} from "@/public/components";

const Page = () => {
    return (
        <div
            className="mt-12 sm:mt-7 w-10/12 bg-white md:w-2/3 lg:w-1/2 mx-auto border border-gray-200 rounded-xl shadow-md shadow-gray-300 ">
            <div className="p-4 sm:p-7">
                <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800 ">ورود یه سایت</h1>
                </div>

                <FormLogin/>

            </div>
        </div>
    );
};
export default Page
