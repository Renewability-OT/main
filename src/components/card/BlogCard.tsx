import React, {useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {motion, useAnimation, useInView} from "framer-motion";


interface Props {
    src: string
    title: string
    date: string
    desc: string
    author: string
    link: string
    profileSrc: string
}

export const BlogCard: React.FC<Props> = ({title, src, date, desc, author, link, profileSrc}) => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    const cardAnimation = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
            }
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
        }
    }
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <motion.div ref={ref} animate={controls}
                    variants={cardAnimation} initial='hidden'
                    className="w-[275px] h-[470px] xs:w-[310px] xs:h-[470px] sm:w-[370px] sm:h-[445px] lg:w-[310px] lg:h-[470px] bg-[#FEFEFE] rounded-2xl drop-shadow-4xl">
            <img alt='blogcard' src={src} className="w-full h-1/2 rounded-t-2xl object-cover object-centerTopBlog"/>
            <div className='w-full text-center mt-2'>
                <p className="font-light text-xs text-[#A7A4A4]">
                    {date}</p>
            </div>
            <p className="text-black flex items-center justify-center mt-2 w-full h-12 px-4 sm:px-6 lg:px-4 text-center font-bold text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[18px] leading-6">{title}</p>
            <div className="flex mt-2">
                <p className="ml-8 mr-8 text-[16px] leading-5 text-center font-light">{desc}</p>
            </div>
            <div className="w-full flex justify-between px-6 items-center mt-5">
                <div className='flex items-center gap-1'>
                    <img alt='avatar' src={profileSrc}
                         className='w-7 h-7 rounded-full border border-black dark:border-white'/>
                    <p className="text-xs font-normal text-black">
                        {author}</p>
                </div>
                <motion.a href={link} whileHover={{scale: 1.1}}
                          whileTap={{scale: 1.0}}
                          transition={{type: "spring", stiffness: 400, damping: 17}}
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center border border-pink text-pink font-light text-[11px] sm:text-[13px] px-4 py-1 rounded-full hover:bg-pink hover:text-[#FEFEFE]">Read
                    More <BiRightArrowAlt className="h-4 w-4"/></motion.a>
            </div>
        </motion.div>
    )
}