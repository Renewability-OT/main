import React, {useEffect, useRef} from "react";
import {motion, useAnimation, useInView} from "framer-motion";

const bannerAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: .7,
        }
    }
}

const textAnimation = {
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {duration: .7}
    },
    hidden: {
        opacity: 0,
        scale: 0.8,
        x: '-200px',
    }
}

const imageAnimation = {
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

export const BannerSection: React.FC = () => {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);
    return (
        <div className="w-full h-full flex justify-center px-6 sm:px-12 mt-24 md:mt-28">
            <motion.div variants={bannerAnimation} initial='hidden' animate='show'
                        className="w-full flex flex-col items-center max-w-[1180px] h-[520px] sm:h-[540px] tablet:h-[640px] lg:h-[680px] rounded-3xl lgXl:rounded-br-[300px] bg-gradient-to-r from-green to-lightBlue shadow-banner">
                <div
                    className="w-full h-full flex flex-col flex-1 items-center lgXl:items-start text-center mt-16 xs:mt-12 tablet:mt-16 lgXl:mt-20">
                    <motion.div ref={ref} animate={controls} variants={textAnimation} initial='hidden'
                                className="w-[90%] lgXl:w-[50%] lgXl:ml-12 flex flex-col items-center z-10">
                        <p
                            className="w-72 xs:w-[400px] tablet:w-full uppercase text-white font-extrabold text-[28px] xs:text-[32px] sm:text-[38px] tablet:text-[48px] lgXl:text-[58px] xl:text-[64px] drop-shadow-3xl leading-9 sm:leading-[3rem] tablet:leading-[3.5rem] lgXl:leading-[4.5rem]">
                            Occupational Therapy <br/>
                            For All Ages
                        </p>
                        <p className="font-medium text-[15px] sm:text-[20px] mt-2">
                            Believing In The Power Of You!
                        </p>
                        <div
                            className="w-full flex flex-col xs:flex-row justify-center items-center mt-4 lg:mt-3 gap-2 xs:gap-3">
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 1.0}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                className="w-[130px] xl:w-[160px] text-white bg-[#35C99B] font-medium border active:border-none py-1 xs:py-2 px-3 rounded-lg shadow-Button cursor-pointer"
                            >
                                Book A Call
                            </motion.button>
                            <motion.a
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 1.0}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                href='#services'
                                className="w-[130px] xl:w-[160px] shadow-Button bg-[#35C99B] text-white font-medium py-1 xs:py-2 px-3 rounded-lg"
                            >
                                Our Services
                            </motion.a>
                        </div>
                    </motion.div>
                    <div
                        className="w-fit z-0 flex flex-1 ml-3 justify-center lgXl:relative lgXl:bottom-[120px] lgXl:w-[600px] lgXl:m-auto lgXl:left-60 xl:left-60 xl:bottom-[122px] items-end ">
                        <motion.img ref={ref} animate={controls} variants={imageAnimation} initial='hidden'
                                    className="w-[250px] h-[210px] xs:w-[330px] xs:h-[260px] tablet:w-[480px] tablet:h-[350px] lg:w-[620px] lg:h-[420px] xl:w-[650px] xl:h-[420px]"
                                    alt="bannerimg"
                                    src="/assets/illustrations/Lifesavers-Caretaking.png"/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
