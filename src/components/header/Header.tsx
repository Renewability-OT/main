import React, {useContext, useEffect, useRef, useState} from "react";
import {Switch} from "../switch/Switch";
import {IoMdClose, IoMdMenu} from "react-icons/io";
import {ClassNames} from "../../util/ClassNames";
import {ThemeContext} from "../../context/ThemeContext";
import {ScrollContext} from "../../context/ScrollContext";
import {motion, useAnimation} from "framer-motion";
import {BookForm} from "../forms/BookForm";

interface Props {
    title?: string
}

export const Header: React.FC<Props> = ({title}) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false)
    const [isScrolling, setIsScrolling] = useState<boolean>(false)
    const {darkMode} = useContext(ThemeContext)
    const {setScrollId} = useContext(ScrollContext)
    const ref = useRef(null)
    const controls = useAnimation();

    const navAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                ease: 'easeInOut',
            }
        }
    }
    const navItemAnimation = {
        hidden: {
            opacity: 0,
            y: '-20px',
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
            }
        }
    }

    useEffect(() => {
        if (title === 'Home') {
            controls.start("visible");
        }
    }, [controls]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const addHeaderStyles = () => {
                if (window.scrollY > 0) {
                    setIsScrolling(true)
                } else {
                    setIsScrolling(false)
                }
            }
            window.addEventListener('scroll', addHeaderStyles)
        }
        return
    }, []);
    return (
        <>
            <header
                className={ClassNames(darkMode ? 'bg-dark' : 'bg-light', isScrolling ? 'shadow-lg' : '', "w-full fixed h-20 top-0 left-0 right-0 px-6 sm:px-12 flex items-center justify-center z-40 transition duration-300 ease-in-out")}>
                < nav className="flex justify-between items-center w-container">
                    <motion.a ref={ref} variants={navAnimation} initial={title === 'Home' ? 'hidden' : 'show'}
                              animate={controls}
                              href="/"
                              className="sm:w-64 text-lg lg:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green to-lightBlue"
                    >
                        <img
                            alt="navbaricon"
                            className="w-6 lg:w-7 mr-1 inline"
                            src="/assets/icon/logo/icons8-leaf-48.png"
                        />
                        Renewability OT
                    </motion.a>
                    <div
                        className={ClassNames(showMenu ? "right-0" : "right-[-100%]", "max-md:flex max-md:flex-col-reverse max-md:justify-end max-md:fixed max-md:bg-light max-md:dark:bg-dark max-md:top-0 max-md:w-full max-md:h-full max-md:px-8 max-md:pt-3 max-md:pb-14 max-md:uppercase max-md:transition-all max-md:duration-300 max-md:ease-in-out md:w-full md:flex")}>
                        <motion.ul ref={ref} variants={navAnimation} initial={title === 'Home' ? 'hidden' : 'show'}
                                   animate={controls}
                                   className="flex flex-col items-center max-md:text-xl gap-8 md:gap-0 md:flex-row">
                            <motion.li variants={navItemAnimation}
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
                                <a href="/">Home</a>
                            </motion.li>
                            <motion.li variants={navItemAnimation}
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
                                <a href="/services" onClick={() => setScrollId('')}>Services</a>
                            </motion.li>
                            <motion.li variants={navItemAnimation}
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
                                <a href="/blog">Blog</a>
                            </motion.li>
                            <motion.li variants={navItemAnimation}
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
                                <a href="/aboutus">About Us</a>
                            </motion.li>
                        </motion.ul>
                        <div
                            className="md:ml-auto flex flex-col md:flex-row gap-4 md:gap-0 lg:gap-2 items-center justify-center mb-12 md:mb-0">
                            <Switch/>
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 1.0}}
                                transition={{type: "spring", stiffness: 400, damping: 17, ease: 'easeInOut',}}
                                className="bg-lightBlue uppercase font-bold text-sm text-[#FFFFFF] dark:text-dark px-6 py-2 rounded-lg shadow-Button hover:shadow-darkButton"
                                onClick={() => setShowModal(true)}
                            >
                                Book A Call
                            </motion.button>
                            {!showModal ||
                                <BookForm showModal={showModal}
                                          setShowModal={() => setShowModal(false)}/>}
                        </div>
                        <div
                            className="text-[2rem] text-lightBlue absolute top-[22px] right-6 sm:right-12 cursor-pointer md:hidden">
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
