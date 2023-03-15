import Link from "next/link";
import React, {useState} from "react";
import {Switch} from "../switch/Switch";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {Dynamic} from "../../util/dynamicClassNames";

export const Navbar: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <>
            <header
                className="w-full bg-light dark:bg-dark fixed h-20 top-0 left-0 right-0 px-6 sm:px-12 flex items-center justify-center shadow-lg z-50">
                <nav className="flex justify-between items-center w-container">
                    <Link
                        href="/"
                        className="sm:w-64 text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-lightBlue"
                    >
                        <img
                            alt="navbaricon"
                            className="w-6 lg:w-7 mr-1 inline"
                            src="/assets/icon/logo/icons8-leaf-48.png"
                        />
                        Renewability OT
                    </Link>
                    <div
                        className={Dynamic(showMenu ? "right-0" : "right-[-100%]", "max-md:flex max-md:flex-col-reverse max-md:justify-end max-md:fixed max-md:bg-light max-md:dark:bg-dark max-md:top-0 max-md:w-full max-md:h-full max-md:px-8 max-md:pt-3 max-md:pb-14 max-md:uppercase max-md:transition-all max-md:duration-300 max-md:ease-in-out md:w-full md:flex")}>
                        <ul className="flex flex-col items-center max-md:text-xl gap-8 md:gap-0 md:flex-row">
                            <li
                                className="
                mr-4
              text-lightBlue
                font-light
                relative
                w-fit
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[.15rem]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-lightBlue
                hover:before:w-full
                hover:before:opacity-100"
                            >
                                <Link href="">Home</Link>
                            </li>
                            <li
                                className="
                mr-4
                text-lightBlue
                font-light
                relative
                w-fit
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[.15rem]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-lightBlue
                hover:before:w-full
                hover:before:opacity-100"
                            >
                                <Link href="">Services</Link>
                            </li>
                            <li
                                className="
                mr-4
                text-lightBlue
                font-light
                relative
                w-fit
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[.15rem]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-lightBlue
                hover:before:w-full
                hover:before:opacity-100"
                            >
                                <Link href="">Blog</Link>
                            </li>
                            <li
                                className="
                mr-4
                text-lightBlue
                font-light
                relative
                w-fit
                before:content-['']
                before:absolute
                before:-bottom-1
                before:left-0
                before:w-0
                before:h-[.15rem]
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-lightBlue
                hover:before:w-full
                hover:before:opacity-100"
                            >
                                <Link href="">About Us</Link>
                            </li>
                        </ul>
                        <div
                            className="md:ml-auto flex flex-col md:flex-row gap-4 md:gap-0 lg:gap-2 items-center justify-center mb-12 md:mb-0">
                            <Switch/>
                            <button
                                className="bg-lightBlue uppercase font-bold text-sm text-[#FFFFFF] dark:text-dark px-6 py-2 rounded-[20px] transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60">
                                Book Now
                            </button>
                        </div>
                        <div
                            className="text-[2rem] text-lightBlue absolute top-[22px] right-4 sm:right-12 cursor-pointer md:hidden">
                            <button onClick={() => setShowMenu(false)}>
                                <IoMdClose/>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="text-[2rem] text-lightBlue md:hidden" onClick={() => setShowMenu(true)}>
                            <IoMdMenu/>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    );
};
