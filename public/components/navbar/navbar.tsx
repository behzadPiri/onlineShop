"use client";

import Link from "next/link";
import {Container} from "@/public/components";
import {usePathname} from "next/navigation";

const Navbar = () => {

    const pathName = usePathname();

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
                    <div className={"max-h-12"}>
                        <Link href={"/shopping-cart"} >
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
