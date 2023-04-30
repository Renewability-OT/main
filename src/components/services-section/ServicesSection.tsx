import React, {useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {motion, useAnimation, useInView} from "framer-motion";
import AnimatedText from "../animation/AnimatedText";
import {ServiceCard} from "../card/ServiceCard";
import {geriatricOptions, pediatricOptions, reikiOptions} from "../../constants/services";


export const ServicesSection = () => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center px-6 pt-6 sm:px-8 lg:px-6 bg-gradient-to-b from-lightBlue to-green mt-28 lgXl:mt-14">
            <AnimatedText text='Our Services'
                          classNames="font-bold text-black text-center text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-lg"/>
            <AnimatedText text='See What We Have To Offer'
                          classNames="font-medium text-[14px] sm:text-[18px] text-[#707070] mb-4 drop-shadow-lg"/>
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
                             scrollId='reiki'/>
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

