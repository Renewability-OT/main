import React, {useContext, useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";
import {ScrollContext} from "../../context/ScrollContext";
import Link from "next/link";

interface Options {
    label: string
}

interface Props {
    src: string
    title: string
    options: Options[]
    scrollId: string
}

export const ServiceCard: React.FC<Props> = ({title, src, options, scrollId}) => {
    const {setScrollId} = useContext(ScrollContext)
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    const cardAnimation = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                delay: .2,
                ease: [0, 0.71, 0.2, 1.01]
            }
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
        }
    }
    const featuresAnimation = {
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
    const featuresItemAnimation = {
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
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <motion.div
            ref={ref} animate={controls}
            variants={cardAnimation} initial='hidden'
            className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
            <div className='w-full h-full flex flex-col items-center mt-8'>
                <div className='w-full h-fit flex justify-center items-center'>
                    <img alt='servicesection' src={src}
                         className="mr-6 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                </div>
                <div className='w-full h-fit flex justify-center items-center mt-6'>
                    <div className='w-full'>
                        <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">{title}</p>
                        <motion.div variants={featuresAnimation} ref={ref} animate={controls} initial='hidden'
                                    className='w-full h-full flex justify-center'>
                            <div className='mt-4'>
                                {options.map((o, i) => {
                                    return (
                                        <motion.div key={i} variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">{o.label}</p>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                        <motion.div className="w-full flex justify-center items-center mt-4 xs:mt-3"
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 1.0}}
                                    transition={{type: "spring", stiffness: 400, damping: 17}}>
                            <Link
                                href="/services"
                                onClick={() => {
                                    setScrollId(scrollId)
                                }}
                                className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full hover:bg-pink hover:text-[#FEFEFE]">Learn
                                More
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}