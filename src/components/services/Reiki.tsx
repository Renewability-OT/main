import React from 'react'
import Image from "next/image";
import AnimatedText from "../animation/AnimatedText";


const Reiki = () => {
    return (
        <div id='reiki' className='w-full h-full bg-gradient-to-r from-lightBlue to-green'>
            <div
                className='w-full h-full bg-light dark:bg-dark flex flex-col justify-center items-center py-6 px-3 md:p-12'>
                <div className='w-full xl:w-container h-full'>
                    <div className='w-full flex flex-col items-center'>
                        <AnimatedText text='Reiki'
                                      classNames="w-[280px] xs:w-[380px] lg:w-full mt-4 mb-2 flex flex-wrap items-center justify-center h-fit text-center text-black text-[22px] xs:text-[28px] lg:text-[32px] font-bold leading-7 md:leading-9"/>
                        <AnimatedText text='Stress Reduction And Relaxation'
                                      classNames="font-medium text-center text-[14px] xs:text-[18px] text-[#707070]"/>
                    </div>
                    <div className='w-full flex flex-col lg:flex-col justify-center items-center'>
                        <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                            <div
                                className='w-full h-fit md:h-[240px] lg:h-[300px] flex justify-center items-center mt-4 '>
                                <Image alt='portrait' src='/assets/photos/reiki.jpeg' width={100} height={100}
                                       className='hidden md:block md:relative bottom-10 left-12 z-10 rounded-xl w-56 h-40 lg:w-72 lg:h-56 shadow-banner'/>
                                <Image alt='portrait' src='/assets/photos/reikihealing.jpeg' width={100} height={100}
                                       className='relative md:top-10 z-20 rounded-xl w-64 h-52 md:w-56 md:h-40 lg:w-72 lg:h-56 shadow-banner'/>
                                <Image alt='portrait' src='/assets/photos/reiki2.jpeg' width={100} height={100}
                                       className='hidden md:block md:relative bottom-10 right-12 z-10 rounded-xl w-56 h-40 lg:w-72 lg:h-56 shadow-banner'/>
                            </div>
                        </div>
                        <div
                            className='w-full flex flex-col justify-center items-center px-5 lg:px-10 py-10'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reiki