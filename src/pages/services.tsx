import React from "react";
import {Layout} from "../components/layout/Layout";
import Link from "next/link";

export default function Services() {

    return (
        <>
            <Layout title="Blog" removeFooter>
                <div className="w-full h-full flex flex-col justify-center items-center px-6 sm:px-12 mt-28">
                    <h1 className="font-bold text-black dark:text-white text-center text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xlWhite lg:drop-shadow-blog"> Our
                        Services</h1>
                    <p className="font-medium text-[14px] sm:text-[18px] text-[#707070] mb-4">
                        See What We Have To Offer
                    </p>
                    <div className='flex flex-col lg:flex-row w-full max-w-[1150px]'>
                        <div
                            className="w-full h-full px-6 bg-lightBlue/20 mr-4 rounded-2xl">
                            <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img alt='servicesection' src='/assets/illustrations/Lifesavers-Ger.png'
                                         className="w-[220px] h-[200px] object-cover object-centerTopServices"/>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <div className='w-full'>
                                        <p className="w-full flex items-center justify-center  h-[80px] mt-4 text-center text-black dark:text-white text-[28px] font-semibold leading-9">Geriatric
                                            Care And Adults With Special Needs</p>
                                        <div className='w-full flex justify-center'>
                                            <div className='mt-4'>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">In
                                                        Home Safety Evaluation</p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Activities
                                                        Of Daily Living
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                        Coordination
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improving
                                                        Cognitive Functioning
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Therapeutic
                                                        Massage
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/Splinting
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                            <Link href=''
                                                  className="border border-pink text-pink font-light text-[11px] xs:text-[13px] sm:text-[16px] lg:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                                More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full h-full px-6 bg-lightBlue/20 mr-4 rounded-2xl">
                            <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Ped.png'
                                         className="w-[220px] h-[200px] object-cover object-centerTopServices"/>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <div className='w-full'>
                                        <p className="w-full h-[80px] flex items-center justify-center mt-4 text-black dark:text-white text-[28px] font-bold leading-9">Pediatric
                                            Care</p>
                                        <div className='w-full flex justify-center'>
                                            <div className='mt-4'>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">In
                                                        Home Safety Evaluation</p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Activities
                                                        Of Daily Living
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                        Coordination
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improving
                                                        Cognitive Functioning
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Therapeutic
                                                        Massage
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/Splinting
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                            <Link href=''
                                                  className="border border-pink text-pink font-light text-[11px] xs:text-[13px] sm:text-[16px] lg:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                                More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="w-full h-full px-6 bg-lightBlue/20 mr-4 rounded-2xl">
                            <div className='w-full h-full flex flex-col justify-center items-center mt-8'>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <img alt='servicesection' src='/assets/illustrations/Lifesavers-Sitting-Reiki.png'
                                         className="w-[220px] h-[200px] object-cover object-centerTopServices mr-8"/>
                                </div>
                                <div className='w-full h-full flex justify-center items-center'>
                                    <div className='w-full'>
                                        <p className="w-full mt-4 flex items-center justify-center  h-[80px] text-center text-black dark:text-white text-[28px] font-bold leading-9">Reiki</p>
                                        <div className='w-full flex justify-center'>
                                            <div className='mt-4'>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">In
                                                        Home Safety Evaluation</p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Activities
                                                        Of Daily Living
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                        Coordination
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improving
                                                        Cognitive Functioning
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Therapeutic
                                                        Massage
                                                    </p>
                                                </div>
                                                <div className="flex items-center w-fit">
                                                    <img className='w-7 mb-3' src='/assets/icon/card/card-check.png'
                                                         alt='servicecardimg'/>
                                                    <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/Splinting
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                                            <Link href=''
                                                  className="border border-pink text-pink font-light text-[11px] xs:text-[13px] sm:text-[16px] lg:text-[16px] px-6 py-1 mt-4 mb-8 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                                                More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}