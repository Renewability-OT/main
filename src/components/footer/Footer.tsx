import Link from "next/link";
import React, {useState} from "react";
import {BsFacebook, BsInstagram} from "react-icons/bs";
import {ContactForm} from "../forms/ContactForm";

interface Props {
    removeFooter?: boolean
}

export const Footer: React.FC<Props> = ({removeFooter}) => {
    const [showModal, setShowModal] = useState(false)

    if (removeFooter) return null
    return (
        <footer className="w-full bg-gradient-to-b from-lightBlue to-green z-40">
            <div className="flex justify-center px-6 xs:px-12">
                <div className="flex flex-col sm:flex-row w-full xs:w-container mt-[88px] mb-32 xs:mb-48">
                    <div className="mr-14 md:mr-28 xl:mr-36">
                        <Link
                            href=""
                            className="text-white text-[22px] xs:text-[26px] font-bold tracking-wide"
                        >
                            <img
                                alt="footerlogo"
                                className="w-6 lg:w-7 mr-2 xs:mr-1 inline"
                                src="/assets/icon/logo/icons8-leaf-48.png"
                            />
                            Renewability OT
                        </Link>
                        <p className="font-thin text-[16px] xs:text-[18px] text-white w-60 ml-8">
                            Providing each individual the opportunity to live life to the
                            fullest.
                        </p>
                    </div>
                    <div
                        className="grid grid-cols-2 ml-8 mt-8 xs:grid-cols-3 sm:mt-0 sm:ml-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 2xl:gap-20">
                        <div>
                            <h3 className="font-bold tracking-wide text-[16px] text-white">
                                Explore
                            </h3>
                            <ul className="grid">
                                <li>
                                    <Link
                                        href="/services"
                                        className="hover:underline font-thin text-white"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/blog"
                                        className="hover:underline font-thin text-white"
                                    >
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-wide text-[16px] text-white">
                                Site
                            </h3>
                            <ul>
                                <li>
                                    <Link
                                        href="/aboutus"
                                        className="hover:underline font-thin text-white"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <button
                                        onClick={() => setShowModal(true)}
                                        className="hover:underline font-thin text-white"
                                    >
                                        Contact Us
                                    </button>
                                    {!showModal ||
                                        <ContactForm showModal={showModal}
                                                     setShowModal={() => setShowModal(false)}/>}
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="w-24 font-bold tracking-wide text-[16px] text-white mb-1">
                                Follow Us
                            </h3>
                            <div className="flex">
                                <Link href="https://www.facebook.com/dgubisch/" className="mr-2">
                                    <BsFacebook size={20}
                                                className='text-white hover:text-pink transition duration-300 ease-in-out'/>
                                </Link>
                                <Link href="https://www.instagram.com/dgubisch/?hl=en" className="mr-2">
                                    <BsInstagram size={20}
                                                 className='text-white hover:text-pink transition duration-300 ease-in-out'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-white text-[12px] sm:text-[16px] font-thin">
                <span>&#169; Copyright Renewability OT. All Rights Reserved</span>
            </div>
        </footer>
    );
};
