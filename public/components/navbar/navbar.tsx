"use client";

import Link from "next/link";
import {Container} from "@/public/components";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useShoppingCartContext} from "@/context/shoppingCartContext";
import {useEffect, useState} from "react";
import {debounceSearch} from "@/utils/debounceValidation";

const Navbar = () => {

    const pathName = usePathname();
    const {cartItems} = useShoppingCartContext()
    const [search, setSearch] = useState("")
    const router = useRouter()
    const searchParams = useSearchParams()


    const navLinks = [
        {
            id: 1,
            title: "خانه",
            link: "/"
        },
        {
            id: 2,
            title: "فروشگاه",
            link: "/store"
        },
        {
            id: 3,
            title: "پنل کاربری",
            link: "/dashboard"
        },
    ];


    useEffect(() => {
        if (pathName !== "/store")
            setSearch("")
    }, [pathName])

    useEffect(() => {
        if (pathName === "/store") {
            debounceSearch(search, () => {
                const params = new URLSearchParams(searchParams.toString());

                if (search.trim()) {
                    params.set("title_like", search);
                } else {
                    params.delete("title_like");
                }

                router.push(`/store?${params.toString()}`);
            });
        }
    }, [search]);

    return (
        <nav className="shadow shadow-gray-500 p-4 ">
            <Container>
                <div className=" flex justify-between ">
                    <div className={"flex items-center "}>
                        {
                            navLinks.map((item) => (
                                <Link
                                    key={item.id}
                                    href={item.link}
                                    className={`mr-2 ${pathName === item.link ? "text-sky-400 font-bold" : "text-gray-500"}`}
                                >
                                    {item.title}
                                </Link>
                            ))
                        }
                    </div>

                    <div className={"max-h-12 flex"}>
                        <div className={"ml-24 flex"} hidden={pathName !== "/store"}>
                            <input
                                type="text"
                                placeholder={"جستجو..."}
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                className="border border-gray-500 focus:border-1  rounded-lg focus:border-transparent focus:ring-blue-500 px-4 py-2"
                            />
                            {/*<button onClick={handleSearch} className="bg-sky-500 p-2">send</button>*/}
                        </div>
                        <Link href={"/shopping-cart"} className="flex">

                            {
                                cartItems.length > 0 && <span
                                    className="bg-red-400 rounded-full w-4 h-4 text-xs text-white text-center">{cartItems.length}</span>
                            }

                            <img
                                src={"../../assets/icons/wired-outline-146-trolley-in-reveal.svg"}
                                alt="shopping-cart"
                                width={32}
                                height={32}
                            />
                        </Link>
                    </div>
                </div>

            </Container>
        </nav>
    );
};
export default Navbar
