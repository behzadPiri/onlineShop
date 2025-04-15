"use client";

import Link from "next/link";
import {Container} from "@/public/components";
import {usePathname} from "next/navigation";
import {useShoppingCartContext} from "@/context/shoppingCartContext";

const Navbar = () => {

    const pathName = usePathname();
    const {cartItems} = useShoppingCartContext()

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
                    <div className={"max-h-12 "}>
                        <Link href={"/shopping-cart"} className="flex" >
                            <span className="bg-red-400 rounded-full w-4 h-4 text-xs text-white text-center">{cartItems.length}</span>
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
