import React, {useContext, useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {ScrollContext} from "../../context/ScrollContext";
import {motion, useAnimation, useInView} from "framer-motion";
import AnimatedText from "../animation/AnimatedText";
import {ServiceCard} from "../card/ServiceCard";
import {geriatricOptions, pediatricOptions, reikiOptions} from "../../constants/services";


export const ServicesSection = () => {
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
        <div
            className="w-full h-full flex flex-col justify-center items-center px-6 pt-6 sm:px-8 lg:px-6 bg-gradient-to-b from-lightBlue to-green mt-28 lgXl:mt-16">
            <AnimatedText text='Our Services'
                          classNames="font-bold text-black text-center text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-blog"/>
            <AnimatedText text='See What We Have To Offer'
                          classNames="font-medium text-[14px] sm:text-[18px] text-[#707070] mb-4"/>
            <div
                className='flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-[1150px] mb-[38px]'>
                <ServiceCard src='/assets/illustrations/Lifesavers-Ger.png' title='Geriatric
                                    Care And Adults With Special Needs' options={geriatricOptions}
                             scrollId='geriatric'/>
                <ServiceCard src='/assets/illustrations/Lifesavers-Sitting-Ped.png' title='Pediatric Care'
                             options={pediatricOptions}
                             scrollId='pediatric'/>
                <ServiceCard src='/assets/illustrations/Lifesavers-Sitting-Reiki.png' title='Reiki'
                             options={reikiOptions}
                             scrollId='geriatric'/>
            </div>
            <motion.a
                href="/services"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 1.0}}
                transition={{type: "spring", stiffness: 400, damping: 17}}
                className="flex items-center mb-[38px] border border-[#FEFEFE] dark:border-[#383C3E] text-[#FEFEFE] dark:text-[#383C3E] text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full shadow-Button hover:shadow-darkButton"
            >
                More Info <BiRightArrowAlt className="mt-0 xs:mt-[2px] ml-[1px] h-6 w-6"/>
            </motion.a>
        </div>
    );
};

