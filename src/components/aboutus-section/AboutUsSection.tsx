import React, {useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {motion, useInView, useAnimation} from "framer-motion";


const textAnimation = {
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {duration: .7}
    },
    hidden: {
        opacity: 0,
        scale: 0.3,
        x: '100px',
    }
}

const imageAnimation = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {duration: .7}
    },
    hidden: {
        opacity: 0,
        x: '-100px',

    }
}


export const AboutUsSection = () => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <>
            <div
                className="w-full flex justify-center relative top-14 mb-10 lgXl:mb-0 lgXl:mt-5 px-6 sm:px-12">
                <div
                    className="flex flex-col lgXl:flex-row justify-center items-center max-w-[1180px] h-full rounded-3xl rounded-br-[300px]">
                    <motion.div ref={ref} animate={controls} variants={imageAnimation} initial='hidden'
                                className="relative m-auto left-0 right-0 top-[7px]">
                        <img alt="aboutus" src="/assets/illustrations/Lifesavers-Caretaking-2.png"
                             className='max-w-[410px] max-h-[210px] xs:max-w-[510px] xs:max-h-[310px] tablet:max-w-[580px] tablet:max-h-[380px] lg:max-w-[560px] lg:max-h-[420px] lgXl:max-w-[590px] lgXl:max-h-[490px] xl:max-w-[650px] xl:max-h-[450px]'/>
                    </motion.div>
                    <motion.div ref={ref} animate={controls} variants={textAnimation} initial='hidden'
                                className="flex flex-col items-center text-center bg-AboutUsBg rounded-3xl lgXl:rounded-bl-[150px] w-full h-full sm:max-w-[700px] sm:max-h-[400px] lgXl:max-h-[500px]">
                        <h1 className="mt-[17.61px] text-lightBlue font-bold text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-lg">
                            About Us
                        </h1>
                        <p className="font-medium text-[14px] sm:text-[18px] text-[#707070] dark:text-[#FEFEFE]">
                            Who Are We?
                        </p>
                        <p className="xs:px-8 lg:mt-[15px] font-light text-[15px] p-2 sm:text-[20px] text-[#2D3436] dark:text-[#FEFEFE]">
                            ReNewAbility OT is a private, in home, Maryland Occupational Therapy
                            practice for psychological and physical issues, owned by Diane
                            Gubisch, PhD, OTR/L, ADHD-CCSP, ASD-clinical specialist, and Art
                            Therapist, which incorporates holistic wellness practices such as
                            Reiki, Therapeutic Massage, and spiritual counseling.
                        </p>
                        <motion.a
                            href="/aboutus"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 1.0}}
                            transition={{type: "spring", stiffness: 400, damping: 17}}
                            className="flex items-center justify-center mt-[8px] mb-6 border border-lightBlue w-[150px] h-[38px] lg:w-[160px] lg:h-[45px] rounded-full text-lightBlue font-medium text-[16px] shadow-Button hover:shadow-darkButton"
                        >
                            Learn More
                            <BiRightArrowAlt className="ml-[1px] h-6 w-6"/>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
            <div id='services'/>
        </>
    );
};
