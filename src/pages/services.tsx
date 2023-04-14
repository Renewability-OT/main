import React, {useContext, useEffect} from "react";
import {Layout} from "../components/layout/Layout";
import {ScrollContext} from "../context/ScrollContext";
import {Fade} from "react-awesome-reveal";

export default function Services() {
    const {scrollId} = useContext(ScrollContext)


    useEffect(() => {
        const element = document.getElementById(scrollId);
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top: element.offsetTop - 80,
            })
        }

    }, [])

    return (
        <>
            <Layout title="Services">
                <div id='geriatric' className='w-full h-full bg-green mt-20'>
                    <div
                        className='w-full h-full bg-white dark:bg-dark flex flex-col justify-center items-center py-6'>
                        <div className='w-full h-full px-5 sm:px-10'>
                            <Fade direction='left'>
                                <p className="w-full mt-4 mb-2 flex items-center justify-center h-fit text-center text-black dark:text-white text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-7 md:leading-9 px-2">Geriatric
                                    Care And Adults With Special Needs</p>
                                <p className="font-medium text-center text-[14px] sm:text-[18px] text-[#707070] mb-4">
                                    *Subtitle Goes Here*
                                </p>
                            </Fade>
                            <div
                                className='w-full h-full flex justify-center gap-8 md:gap-0 mt-8'>
                                <div className='w-full lg:w-5/6 h-full flex flex-col justify-center items-center'>
                                    <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                                        <Fade direction='right'>
                                            <div
                                                className='w-full h-fit flex justify-center items-center'>
                                                <img alt='portrait' src='/assets/photos/geriatric2.jpeg'
                                                     className='w-[400px] h-[300px] rounded-xl shadow-banner'/>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div
                                        className='w-full xs:w-4/5 md:w-fit h-full flex flex-col mt-8 mb-6'>
                                        <div className='w-full h-full flex items-start'>
                                            <div className='w-full h-full flex justify-center'>
                                                <Fade>
                                                    <div
                                                        className='w-full h-full bg-black/10 dark:bg-white/30 px-8 md:px-12 py-6 rounded-3xl'>
                                                        <div
                                                            className='w-fit ml-auto mr-auto md:ml-2 flex flex-col md:grid md:grid-cols-2 md:gap-x-8'>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">In
                                                                    Home Safety Evaluation</p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Activities
                                                                    Of Daily Living
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                                    Coordination
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Improve
                                                                    Cognitive Function
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Therapeutic
                                                                    massage
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/splinting
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Grief
                                                                    and
                                                                    anxiety counseling
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Coping
                                                                    with chronic pain
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Leisure
                                                                    activities
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black dark:text-white ml-2 mb-3 xs:mb-3 text-md w-fit">Home
                                                                    exercise program
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='pediatric' className='w-full h-full bg-white dark:bg-dark'>
                    <div
                        className='w-full h-full bg-gradient-to-r from-lightBlue to-green flex flex-col justify-center items-center py-6'>
                        <div className='w-full h-full px-5 sm:px-10'>
                            <Fade direction='left'>
                                <p className="w-full mt-4 mb-2 flex items-center justify-center h-fit text-center text-black text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-7 md:leading-9">Pediatric
                                    Care</p>
                                <p className="font-medium text-center text-[14px] sm:text-[18px] text-[#707070] mb-4">
                                    *Subtitle Goes Here*
                                </p>
                            </Fade>
                            <div
                                className='w-full h-full flex justify-center gap-8 md:gap-0 mt-4'>
                                <div className='w-full lg:w-5/6 h-full flex flex-col justify-center items-center'>
                                    <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                                        <Fade direction='right'>
                                            <div
                                                className='w-full h-fit flex justify-center items-center'>
                                                <img alt='portrait' src='/assets/photos/pediatric2.jpeg'
                                                     className='w-[400px] h-[300px] rounded-xl shadow-banner'/>
                                            </div>
                                        </Fade>
                                    </div>
                                    <div
                                        className='w-full xs:w-4/5 md:w-fit h-full flex flex-col mt-8 mb-6'>
                                        <div className='w-full h-full flex items-start'>
                                            <div className='w-full h-full flex justify-center'>
                                                <Fade>
                                                    <div
                                                        className='w-full h-full bg-white/30 px-8 md:px-12 py-6 rounded-3xl'>
                                                        <div
                                                            className='w-fit ml-auto mr-auto md:ml-2 flex flex-col md:grid md:grid-cols-2 md:gap-x-8'>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">ADHD</p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Autism
                                                                    Spectrum Disorder
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Emotional/behavioral
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Social
                                                                    Anxieties
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Mindfulness
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Handwriting
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Positioning/splinting
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Improving
                                                                    range of motion
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Strengthening
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Play/educational
                                                                    activities
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Play/educational
                                                                    activities
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Sensory
                                                                    Integration
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center w-fit">
                                                                <img className='w-7 mb-3'
                                                                     src='/assets/icon/card/card-check.png'
                                                                     alt='servicecardimg'/>
                                                                <p className="text-black ml-2 mb-3 xs:mb-3 text-md w-fit">Home
                                                                    exercise program
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='reiki' className='w-full h-full bg-gradient-to-r from-lightBlue to-green'>
                    <div
                        className='w-full h-full bg-light dark:bg-dark flex flex-col justify-center items-center py-6 px-3 md:p-12'>
                        <div className='w-full xl:w-container h-full'>
                            <Fade direction='left'>
                                <p className="w-full mt-4 mb-2 flex items-center justify-center h-fit text-center text-black dark:text-white text-[22px] md:text-[28px] xl:text-[32px] font-bold leading-7 md:leading-9">Reiki</p>
                                <p className="font-medium text-center text-[14px] sm:text-[18px] text-[#707070] mb-4">
                                    Stress Reduction and Relaxation
                                </p>
                            </Fade>
                            <div className='w-full flex flex-col lg:flex-col justify-center items-center'>
                                <div className='w-full flex justify-center items-center mt-auto mb-auto'>
                                    <div
                                        className='w-full h-fit md:h-[240px] lg:h-[300px] flex justify-center items-center mt-4 '>
                                        <Fade direction='left'>
                                            <img alt='portrait' src='/assets/photos/reiki.jpeg'
                                                 className='hidden md:block md:relative bottom-10 left-12 z-10 rounded-xl w-56 h-40 lg:w-72 lg:h-56 shadow-banner'/>
                                        </Fade>
                                        <Fade direction='up'>
                                            <img alt='portrait' src='/assets/photos/reikihealing.jpeg'
                                                 className='relative md:top-10 z-20 rounded-xl w-64 h-52 md:w-56 md:h-40 lg:w-72 lg:h-56 shadow-banner'/>
                                        </Fade>
                                        <Fade direction='right'>
                                            <img alt='portrait' src='/assets/photos/reiki2.jpeg'
                                                 className='hidden md:block md:relative bottom-10 right-12 z-10 rounded-xl w-56 h-40 lg:w-72 lg:h-56 shadow-banner'/>
                                        </Fade>
                                    </div>
                                </div>
                                <Fade>
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
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}