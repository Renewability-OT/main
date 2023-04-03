import Link from "next/link";
import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";

export const ServicesSection = () => {
    return (
        <div className="w-full h-full flex justify-center">
            <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-lightBlue to-green">
                <h1 className="mt-[24px] font-bold text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl">
                    Services
                </h1>
                <p className="font-medium text-[14px] sm:text-[18px] text-[#707070]">
                    See What We Have To Offer
                </p>
                <div
                    className='flex flex-col lg:flex-row justify-center items-center gap-4 w-full lg:w-[1000px] xl:w-[1150px] mt-[38px]'>
                    <div
                        className="w-full max-w-[400px] h-full px-6 bg-white/30 rounded-2xl">
                        <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Ger.png'
                                     className="w-[220px] h-[200px] object-cover object-centerTopServices mr-8"/>
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='w-full'>
                                    <p className="w-full flex items-center justify-center h-fit lg:h-[60px] xl:h-[80px] mt-4 text-center text-black text-[22px] xl:text-[28px] font-semibold leading-7 xl:leading-9">Geriatric
                                        Care And Adults With Special Needs</p>
                                    <div className='w-full flex justify-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">In
                                                    Home Safety Evaluation</p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Activities
                                                    Of Daily Living
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                    Coordination
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                    Cognitive Function
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                        <Link href='/services'
                                              className="cursor-pointer border border-pink text-pink font-light text-[13px] xs:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                            More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full max-w-[400px] h-full px-6 bg-white/30 rounded-2xl">
                        <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Ped.png'
                                     className="w-[220px] h-[200px] object-cover object-centerTopServices mr-8"/>
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='w-full'>
                                    <p className="w-full h-fit lg:h-[60px] xl:h-[80px] flex items-center justify-center mt-4 text-black text-[22px] xl:text-[28px] font-bold leading-9">Pediatric
                                        Care</p>
                                    <div className='w-full flex justify-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">ADHD</p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Autism
                                                    Spectrum Disorder
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Emotional/behavioral
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Social
                                                    Anxieties
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Mindfulness
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                        <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                            <Link href='/services'
                                                  className="cursor-pointer border border-pink text-pink font-light text-[13px] xs:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full max-w-[400px] h-full px-6 bg-white/30 rounded-2xl">
                        <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Reiki.png'
                                     className="w-[220px] h-[200px] object-cover object-centerTopServices mr-8"/>
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='w-full'>
                                    <p className="w-full mt-4 flex items-center justify-center h-fit lg:h-[60px] xl:h-[80px] text-center text-black text-[22px] xl:text-[28px] font-bold leading-9">Reiki</p>
                                    <div className='w-full flex justify-center items-center'>
                                        <div className='mt-4'>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">In home
                                                    Reiki session
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Stress
                                                    reduction
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Relaxation
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Self
                                                    healing
                                                </p>
                                            </div>
                                            <div className="flex items-center w-fit">
                                                <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                     alt='servicecardimg'/>
                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Meditation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                        <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                            <Link href='/services'
                                                  className="cursor-pointer border border-pink text-pink font-light text-[13px] xs:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                                More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                    href="/services"
                    className="flex items-center mt-[38px] mb-[38px] border border-[#FEFEFE] dark:border-[#383C3E] text-[#FEFEFE] dark:text-[#383C3E] text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
                >
                    More Info <BiRightArrowAlt className="mt-0 xs:mt-[2px] ml-[1px] h-6 w-6"/>
                </Link>
            </div>
        </div>
    );
};
