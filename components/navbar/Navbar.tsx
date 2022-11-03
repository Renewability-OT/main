import Link from "next/link";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="fixed h-16 lg:h-20 top-0 left-0 right-0 px-12 flex items-center justify-center shadow-lg">
        <div className="flex items-center w-container">
          <Link
            href="/"
            className="text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lightBlue to-green"
          >
            <img
              className="w-6 lg:w-7 mr-1 inline"
              src="\assets\icon\favicon\icons8-leaf-48.png"
            />
            Renewability OT
          </Link>
          <ul className="grid grid-cols-4 text-center w-[18rem] m-0 p-0 relative mr-auto ml-6">
            <li className="text-green hover:font-bold">
              <Link href="">Home</Link>
            </li>
            <li className="text-green hover:font-bold">
              <Link href="">Services</Link>
            </li>
            <li className="text-green hover:font-bold">
              <Link href="">Blog</Link>
            </li>
            <li className="text-green hover:font-bold">
              <Link href="">About Us</Link>
            </li>
          </ul>
          <button className="bg-green font-bold text-sm text-[#FFFFFF] px-5 py-2 rounded-[20px] transition ease-in-out duration-300 shadow-bookButton hover:shadow-darkBookButton">
            Book Now
          </button>
        </div>
      </nav>
    </>
  );
};
