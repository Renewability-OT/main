import React, {useContext, useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {ScrollContext} from "../../context/ScrollContext";
import {motion, useAnimation, useInView} from "framer-motion";
import AnimatedText from "../animation/AnimatedText";


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
                <motion.div
                    ref={ref} animate={controls}
                    variants={cardAnimation} initial='hidden'
                    className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <div className='w-full h-full flex flex-col items-center mt-8'>
                        <div className='w-full h-fit flex justify-center items-center'>
                            <img alt='servicesection' src='/assets/illustrations/Lifesavers-Ger.png'
                                 className="mr-4 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                        </div>
                        <div className='w-full h-fit flex justify-center items-center mt-6'>
                            <div className='w-full'>
                                <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Geriatric
                                    Care And Adults With Special Needs</p>
                                <motion.div variants={featuresAnimation} ref={ref} animate={controls} initial='hidden'
                                            className='w-full h-full flex justify-center'>
                                    <div className='mt-4'>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">In
                                                Home Safety Evaluation</p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Activities
                                                Of Daily Living
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Strengthening
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Improve
                                                Coordination
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Improve
                                                Cognitive Function
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                    <motion.a
                                        href="/services"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 1.0}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        onClick={() => setScrollId('geriatric')}
                                        className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full hover:bg-pink hover:text-[#FEFEFE]">Learn
                                        More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref} animate={controls}
                            variants={cardAnimation} initial='hidden'
                            className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <div className='w-full h-full flex flex-col items-center mt-8'>
                        <div className='w-full h-fit flex justify-center items-center'>
                            <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Ped.png'
                                 className="mr-8 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                        </div>
                        <div className='w-full h-fit flex justify-center items-center mt-6'>
                            <div className='w-full'>
                                <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Pediatric
                                    Care</p>
                                <motion.div variants={featuresAnimation} ref={ref} animate={controls} initial='hidden'
                                            className='w-full h-full flex justify-center'>
                                    <div className='mt-4'>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">ADHD</p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Autism
                                                Spectrum Disorder
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Emotional/behavioral
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Social
                                                Anxieties
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Mindfulness
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                    <motion.a
                                        href="/services"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 1.0}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        onClick={() => setScrollId('pediatric')}
                                        className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full hover:bg-pink hover:text-[#FEFEFE]">Learn
                                        More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref} animate={controls}
                            variants={cardAnimation} initial='hidden'
                            className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <div className='w-full h-full flex flex-col items-center mt-8'>
                        <div className='w-full h-fit flex justify-center items-center'>
                            <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Reiki.png'
                                 className="mr-8 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                        </div>
                        <div className='w-full h-fit flex justify-center items-center mt-6'>
                            <div className='w-full'>
                                <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Reiki</p>
                                <div className='w-full h-full flex justify-center'>
                                    <motion.div variants={featuresAnimation} ref={ref} animate={controls}
                                                initial='hidden' className='mt-4'>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">In
                                                home
                                                Reiki session
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Stress
                                                reduction
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Relaxation
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Self
                                                healing
                                            </p>
                                        </motion.div>
                                        <motion.div variants={featuresItemAnimation}
                                                    className="flex items-center w-fit">
                                            <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                 alt='servicecardimg'/>
                                            <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Meditation
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                    <motion.a
                                        href="/services"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 1.0}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        onClick={() => setScrollId('reiki')}
                                        className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full hover:bg-pink hover:text-[#FEFEFE]">Learn
                                        More
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
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

