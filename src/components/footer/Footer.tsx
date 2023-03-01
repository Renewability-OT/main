import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-lightBlue to-green">
      <div className="flex justify-center px-12">
        <div className="flex w-container mt-[88px] mb-48 z-50">
          <div className="md:mr-14 xl:mr-36">
            <Link
              href=""
              className="text-white text-[26px] font-bold tracking-wide"
            >
              <img
                  alt='footerlogo'
                className="w-6 lg:w-7 mr-1 inline"
                  src='../../public/assets/icon/logo/icons8-leaf-48.png'
              />
              Renewability OT
            </Link>
            <p className="font-thin text-[18px] text-white w-60 ml-8">
              Providing each individual the opportunity to live life to the
              fullest.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20 z-50">
            <div>
              <h3 className="font-bold tracking-wide text-[16px] text-white">
                Explore
              </h3>
              <ul className="grid">
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    Media
                  </Link>
                </li>
              </ul>
            </div>
            <div className="z-50">
              <h3 className="font-bold tracking-wide text-[16px] text-white">
                Site
              </h3>
              <ul>
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href=""
                    className="hover:underline font-thin text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="z-50">
              <h3 className="w-24 font-bold tracking-wide text-[16px] text-white mb-1">
                Follow Us
              </h3>
              <div className="flex">
                <Link href="https://www.facebook.com" className="mr-2">
                  <BsFacebook size={20} color="white" />
                </Link>
                <Link href="https://www.twitter.com" className="mr-2">
                  <BsTwitter size={20} color="white" />
                </Link>
                <Link href="https://www.instagram.com" className="mr-2">
                  <BsInstagram size={20} color="white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
            alt='footerimg'
            src='../../public/assets/illustrations/Amigos-Tree.png'
          className="absolute w-96 md:right-2 lg:right-8 xl:right-20 2xl:right-32 mt-[45px] z-10"
        />
      </div>
      <div className="text-center text-white text-[16px] font-thin z-50">
        <span>&#169; Copyright Renewability OT. All Rights Reserved</span>
      </div>
    </footer>
  );
};
