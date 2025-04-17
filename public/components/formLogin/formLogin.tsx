"use client"
import Cookies from "js-cookie";

import {useState} from "react";
import {redirect} from "next/navigation";

const FormLogin = () => {

    const [fullName, setFullName] = useState("")
    const [password, setPassword] = useState("")


    const isEnable = Boolean(fullName) && Boolean(password)


    const handleSubmit = () => {

        const response = {
            token: "dbhkvdvlzh;jzu n9pzy8t4s^^#e9u084ytz4ty8tu4t4utzy4nu 84ta4at m4yta4yt;au44yt;u;dlzkvnzd;n",
            expires:1
        }
        if (isEnable){
            Cookies.set("token", response.token, {expires: response.expires});
            redirect("/dashboard")
        }

    }

    return (
        <div className="mt-5">

            <form>
                <div className="grid gap-y-4">

                    <div>
                        <label htmlFor="fullName" className="block text-sm mb-2 ">نام و نام خانوادگی</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm border
                            focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                            required
                        />

                    </div>


                    <div className="flex flex-wrap justify-between items-center gap-2">
                        <label htmlFor="password" className="block text-sm mb-2 ">گذر واژه</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm border
                            focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            required
                        />
                    </div>


                    <button
                        onClick={handleSubmit}
                        disabled={!isEnable}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-base font-bold
                        rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700
                         disabled:opacity-50 disabled:cursor-no-drop cursor-pointer ">
                        ورود
                    </button>
                </div>
            </form>

        </div>
    );
};
export default FormLogin
