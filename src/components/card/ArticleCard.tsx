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

export const ArticleCard: React.FC<Props> = ({title, src, date, desc, link, profileSrc}) => {
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
                    className='w-full h-full sm:h-[280px] lg:h-[220px] rounded-3xl bg-light dark:bg-dark shadow-article mb-4'>
            <div className='w-full h-full flex flex-col items-center sm:flex-row p-6 xs:p-8'>
                <img alt='article-img' className='w-full xs:w-2/3 sm:w-1/3 h-full rounded-3xl'
                     src={src}/>
                <div className='w-full h-full ml-3 flex flex-col items-start'>
                    <p className="font-light text-xs text-[#A7A4A4] mt-4 sm:mt-0">{date}</p>
                    <p className='h-fit w-full flex items-center text-black dark:text-white font-bold text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[18px] leading-5 mt-1'>{title}</p>
                    <p className="text-[16px] text-black dark:text-white leading-5 font-light pr-4 sm:pr-0 lg:pr-10 mt-1">{desc}</p>
                    <div className='w-full h-full'>
                        <div
                            className='w-full h-full flex flex-row justify-between items-end mt-4 sm:mt-0'>
                            <div className='flex items-center gap-2 mr-2'>
                                <img alt='avatar' src={profileSrc}
                                     className='hidden xs:block w-9 h-9 rounded-full border border-black dark:border-white'/>
                                <p className="font-light text-sm font-normal text-black dark:text-white">
                                    Colin Breeding</p>
                            </div>
                            <div className='flex items-center'>
                                <a href={link}
                                   target="_blank" rel="noopener noreferrer"
                                   className="flex items-center border border-pink text-pink font-light text-[11px] sm:text-[13px] px-4 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE] mr-2">Read
                                    Article <BiRightArrowAlt className="h-4 w-4"/></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}