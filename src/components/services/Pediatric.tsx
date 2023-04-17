import React, {useEffect, useRef} from 'react'
import Image from "next/image";
import AnimatedText from "../animation/AnimatedText";
import {motion, useAnimation, useInView} from "framer-motion";


const Pediatric = () => {
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
        <div id='pediatric' className='w-full h-full bg-white dark:bg-dark'>
            <div
                className='w-full h-full bg-gradient-to-r from-lightBlue to-green flex flex-col justify-center items-center py-6'>
                <div className='w-full h-full px-6 sm:px-10'>
                    <div className='w-full flex flex-col items-center'>
                        <AnimatedText text='Pediatric Care'
                                      classNames="w-[280px] xs:w-[380px] lg:w-full mt-4 mb-2 flex flex-wrap items-center justify-center h-fit text-center text-black text-[22px] xs:text-[28px] lg:text-[32px] font-bold leading-7 md:leading-9"/>
                        <AnimatedText text='*Subtitle Goes Here*'
                                      classNames="font-medium text-center text-[14px] xs:text-[18px] text-[#707070]"/>
                    </div>
                    <div
                        className='w-full h-full flex justify-center gap-8 md:gap-0 mt-4'>
                        <div className='w-full lg:w-5/6 h-full flex flex-col justify-center items-center'>
                            <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                                <motion.div ref={ref} animate={controls}
                                            variants={imageAnimation} initial='hidden'
                                            className='w-full h-fit flex justify-center items-center'>
                                    <Image alt='portrait' src='/assets/photos/pediatric2.jpeg' width={100} height={100}
                                           className='w-[300px] h-[220px] xs:w-[350px] xs:h-[250px] md:w-[400px] md:h-[270px] rounded-xl shadow-banner'/>
                                </motion.div>
                            </div>
                            <div
                                className='w-full xs:w-4/5 md:w-fit h-full flex flex-col mt-8 mb-6'>
                                <div className='w-full h-full flex items-start'>
                                    <div className='w-full h-full flex justify-center'>
                                        <motion.div ref={ref} animate={controls}
                                                    variants={textAnimation} initial='hidden'
                                                    className='w-full h-full bg-white/30 px-8 md:px-12 py-6 rounded-xl'>
                                            <motion.div ref={ref} animate={controls}
                                                        variants={featuresAnimation} initial='hidden'
                                                        className='w-fit ml-auto mr-auto md:ml-2 flex flex-col md:grid md:grid-cols-2 md:gap-x-8'>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">ADHD</p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Autism
                                                        Spectrum Disorder
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Emotional/behavioral
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Social
                                                        Anxieties
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Mindfulness
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Handwriting
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/splinting
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Improving
                                                        range of motion
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Play/educational
                                                        activities
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Play/educational
                                                        activities
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Sensory
                                                        Integration
                                                    </p>
                                                </motion.div>
                                                <motion.div variants={featuresItemAnimation}
                                                            className="flex items-center w-fit">
                                                    <img className='w-7 mb-3'
                                                         src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Home
                                                        exercise program
                                                    </p>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pediatric