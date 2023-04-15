import Link from "next/link";
import React, {useContext} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {ScrollContext} from "../../context/ScrollContext";
import {Fade} from "react-awesome-reveal";


export const ServicesSection = () => {
    const {setScrollId} = useContext(ScrollContext)
    return (
        <div
            className="w-full h-full flex flex-col justify-center items-center px-6 pt-6 sm:px-8 lg:px-6 bg-gradient-to-b from-lightBlue to-green mt-28 lgXl:mt-16">
            <Fade cascade>
                <h1 className="font-bold text-black text-center text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-blog"> Our
                    Services</h1>
                <p className="font-medium text-[14px] sm:text-[18px] text-[#707070] mb-4">
                    See What We Have To Offer
                </p>
            </Fade>
            <div
                className='flex flex-col lg:flex-row justify-center items-center gap-6 w-full max-w-[1150px] mb-[38px]'>
                <div
                    className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <Fade duration={2000}>
                        <div className='w-full h-full flex flex-col items-center mt-8'>
                            <div className='w-full h-fit flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Ger.png'
                                     className="mr-4 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                            </div>
                            <div className='w-full h-fit flex justify-center items-center mt-6'>
                                <div className='w-full'>
                                    <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Geriatric
                                        Care And Adults With Special Needs</p>
                                    <div className='w-full h-full flex justify-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">In
                                                    Home Safety Evaluation</p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Activities
                                                    Of Daily Living
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Strengthening
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Improve
                                                    Coordination
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Improve
                                                    Cognitive Function
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                        <Link
                                            href="/services"
                                            onClick={() => setScrollId('geriatric')}
                                            className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                            More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div
                    className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <Fade duration={2000}>
                        <div className='w-full h-full flex flex-col items-center mt-8'>
                            <div className='w-full h-fit flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Ped.png'
                                     className="mr-8 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                            </div>
                            <div className='w-full h-fit flex justify-center items-center mt-6'>
                                <div className='w-full'>
                                    <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Pediatric
                                        Care</p>
                                    <div className='w-full h-full flex justify-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">ADHD</p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Autism
                                                    Spectrum Disorder
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Emotional/behavioral
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Social
                                                    Anxieties
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Mindfulness
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                        <Link
                                            href="/services"
                                            onClick={() => setScrollId('pediatric')}
                                            className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                            More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div
                    className="w-full max-w-[400px] h-[600px] px-6 bg-white/30 rounded-2xl">
                    <Fade duration={2000}>
                        <div className='w-full h-full flex flex-col items-center mt-8'>
                            <div className='w-full h-fit flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Reiki.png'
                                     className="mr-8 w-[220px] h-[200px] sm:h-[200px] max-h-[200px] object-cover object-centerTopServices"/>
                            </div>
                            <div className='w-full h-fit flex justify-center items-center mt-6'>
                                <div className='w-full'>
                                    <p className="w-56 xs:w-64 xl:w-full m-auto flex items-center justify-center h-[50px] lg:h-[60px] text-center text-black text-[18px] sm:text-[20px] xl:text-[24px] font-semibold leading-6 xl:leading-8">Reiki</p>
                                    <div className='w-full h-full flex justify-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">In
                                                    home
                                                    Reiki session
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Stress
                                                    reduction
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Relaxation
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Self
                                                    healing
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-sm xs:text-base w-fit">Meditation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center items-center mt-4 xs:mt-3">
                                        <Link
                                            href="/services"
                                            onClick={() => setScrollId('reiki')}
                                            className="cursor-pointer border border-pink text-pink font-light text-[16px] px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                            More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
            <Link
                href="/services"
                className="flex items-center mb-[38px] border border-[#FEFEFE] dark:border-[#383C3E] text-[#FEFEFE] dark:text-[#383C3E] text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
            >
                More Info <BiRightArrowAlt className="mt-0 xs:mt-[2px] ml-[1px] h-6 w-6"/>
            </Link>
        </div>
    );
};

