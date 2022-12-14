import Link from "next/link";
import React from "react";
import { Switch } from "../switch/Switch";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="bg-light dark:bg-dark fixed h-16 lg:h-20 top-0 left-0 right-0 px-12 flex items-center justify-center shadow-lg z-50">
        <div className="flex items-center w-container">
          <Link
            href="/"
            className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-lightBlue"
          >
            <img
              className="w-6 lg:w-7 mr-1 inline"
              src="\assets\icon\logo\icons8-leaf-48.png"
            />
            Renewability OT
          </Link>
          <ul className="text-center flex justify-start items-center w-[22rem] m-0 p-0 relative mr-auto ml-9">
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
          <Switch />
          <button className="bg-lightBlue uppercase font-bold text-sm text-[#FFFFFF] dark:text-dark px-6 py-2 rounded-[20px] transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60">
            Book Now
          </button>
        </div>
      </nav>
    </>
  );
};
