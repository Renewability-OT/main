import React, {useEffect, useRef} from 'react'
import Image from "next/image";
import AnimatedText from "../animation/AnimatedText";
import {motion, useAnimation, useInView} from "framer-motion";


const Reiki = () => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    const textAnimation = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: {duration: .7}
        },
        hidden: {
            opacity: 0,
            scale: 0.5,
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
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <div id='reiki' className='w-full h-full bg-gradient-to-r from-lightBlue to-green'>
            <div
                className='w-full h-full bg-light dark:bg-dark flex flex-col justify-center items-center py-6 px-6 md:p-12'>
                <div className='w-full xl:w-container h-full'>
                    <div className='w-full flex flex-col items-center'>
                        <AnimatedText text='Reiki'
                                      classNames="w-[280px] xs:w-[380px] text-dark dark:text-white lg:w-full mt-4 mb-2 flex flex-wrap items-center justify-center h-fit text-center text-black text-[22px] xs:text-[28px] lg:text-[32px] font-bold leading-7 md:leading-9"/>
                        <AnimatedText text='Stress Reduction And Relaxation'
                                      classNames="font-medium text-center text-[14px] xs:text-[18px] text-[#707070]"/>
                    </div>
                    <div className='w-full flex flex-col lg:flex-col justify-center items-center mt-4'>
                        <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                            <motion.div ref={ref} animate={controls}
                                        variants={imageAnimation} initial='hidden'
                                        className='w-full h-fit flex justify-center items-center'>
                                <Image alt='portrait' src='/assets/photos/reiki2.jpeg' width={100} height={100}
                                       className='w-[300px] h-[220px] xs:w-[350px] xs:h-[250px] md:w-[400px] md:h-[270px] rounded-xl shadow-banner'/>
                            </motion.div>
                        </div>
                        <motion.div ref={ref} animate={controls}
                                    variants={textAnimation} initial='hidden'
                                    className='w-full flex flex-col justify-center items-center lg:px-10 py-10'>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10">Reiki
                                is using the universal life force energy to
                                alleviate stress from the body to enable the body&apos;s own natural healing
                                abilities to restore balance to the mind, body and spirit. </p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10">Diane
                                Gubisch, PhD, OTR/L is a USUI and KARUNA Reiki Master/Teacher for over 20
                                years,
                                providing Reiki in all aspects of her Occupational Therapy practice. Reiki
                                has
                                been provided to those seeking balance for increasing health and vitality.
                                It is
                                a gentle hands on approach to reducing the effects of stress in our daily
                                lives.
                                Reiki has assisted those who are beginning life and for those at the end of
                                life. Reiki assist us with being present with ourselves without fear. Reiki
                                allows us to be still and to be filled with the Universal Life Force open to
                                us
                                all. Reiki teaches us that we are more than capable of accepting life as it
                                is
                                and compassionately moving forward towards what is right for us at this
                                time. </p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10">Reiki
                                sessions are usually 1 hour in length and are held in your home. Reiki is
                                usually done while lying down but can be provided in any position that is
                                most
                                comfortable. The person, wearing comfortable clothing, receiving Reiki
                                usually
                                is lightly touched along Chakra points of the body or not touched at all
                                depending on the session, first on the front of the body and then on the
                                back.
                                Each session is unique and Reiki provides each person with what is most
                                needed
                                at that time. Drinking water before and after a session and having a
                                relaxing
                                rest of the day is recommended. Reiki sessions can be as frequent as 3x/wk
                                to
                                1x/month depending on the need.</p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10">Learning
                                Reiki is a wonderful gift to yourself as well as for others. To learn Reiki
                                requires a commitment to yourself to provide Reiki to yourself for self
                                healing
                                and to live as closely to the principals of Reiki as possible for your
                                continued
                                spiritual awakening.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reiki