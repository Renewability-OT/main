import {Layout} from "../components/layout/Layout";
import React, {useEffect, useRef} from "react";
import AnimatedText from "../components/animation/AnimatedText";
import {motion, useAnimation, useInView} from "framer-motion";

export default function AboutUs() {
    const ref = useRef(null)
    const controls = useAnimation();
    const isInView = useInView(ref, {once: true})
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
        <>
            <Layout title="About Us">
                <div
                    className="w-full h-full flex justify-center bg-cloudBg bg-cover px-6 sm:px-12">
                    <div
                        className='w-full lg:w-container h-full bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-xl mt-28 md:mt-32 mb-12'>
                        <div className='w-full flex flex-col justify-center items-center mt-8 px-4'>
                            <AnimatedText text='Renewability
                                OT, LLC'
                                          classNames="mt-[8px] font-bold text-black dark:text-white text-[22px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl"/>
                            <AnimatedText text='Diane
                                Gubisch, PH.D, OTR/L, ADHD-CCSP'
                                          classNames="text-center font-medium text-[14px] sm:text-[18px] text-[#707070] dark:text-[#383C3E]"/>
                            <motion.img ref={ref} animate={controls}
                                        variants={imageAnimation} initial='hidden' alt='portrait'
                                        src='/assets/photos/portrait-diane.jpeg'
                                        className='rounded-xl mt-8'/>
                        </div>
                        <div
                            className='w-full flex flex-col justify-center items-center px-4 xs:px-10 md:px-16 lg:px-24 mt-8 mb-16'>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10"><span
                                className='font-semibold'>ReNewAbility
                                OT</span> is a
                                private, in home, Maryland Occupational Therapy practice for <span
                                    className='font-semibold'>psychological and physical</span>{' '}
                                issues, owned by Diane Gubisch, PhD, OTR/L, ADHD-CCSP, ASD-clinical specialist, and
                                Art
                                Therapist, which incorporates holistic wellness practices such as <span
                                    className='font-semibold'>Reiki,
                                Therapeutic
                                Massage, and spiritual counseling</span>. This Occupational Therapy practice
                                treats <span
                                    className='font-semibold'>pediatrics
                                through geriatric</span>{' '}
                                populations with physical and psychological issues. With over 30 years
                                of experience in the health field, this Occupational Therapy practice offers a vast
                                knowledge of therapeutic techniques, including <span
                                    className='font-semibold'>aquatic and animal assisted therapy</span>,
                                and hands on techniques for a variety of disabilities. Diane is creative and
                                compassionate
                                and brings to the therapeutic setting a hope-filled and fun attitude which is
                                contagious!</p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10 mt-4"><span
                                className='font-semibold'>ReNewAbility
                                OT&apos;s</span> mission is to provide each individual the opportunity to live life to
                                the
                                fullest.
                                A comprehensive <span
                                    className='font-semibold'>in home evaluation</span> will be
                                performed and an outline of the physical,
                                psychological and spiritual goals provided for the pediatric to the geriatric
                                client. A
                                full therapeutic programs are developed and caregivers will be instructed on their
                                implementation. Treatment frequency will depend upon need and follow up visits can
                                use
                                telehealth/zoom as specific needs change.</p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10 mt-4"><span
                                className='font-semibold'>ReNewAbility
                                OT</span> for the pediatric client is performed in the home. Diane works closely
                                with each
                                family to provide comprehensive care to address the needs of each child and bring
                                harmony to their home. Therapy is provided in a loving and playful manner to
                                capitalize
                                on current abilities while providing opportunities for physical, cognitive and
                                emotional
                                development. Diane is an <span
                                    className='font-semibold'>ADHD Certified Clinical Service Provider and a Certified Autism
                                Spectrum Disorder Clinical Specialist</span>.</p>
                            <p className="font-light text-[16px] sm:text-[18px] text-black dark:text-white indent-10 mt-4"><span
                                className='font-semibold'>ReNewAbility
                                OT</span> for the <span
                                className='font-semibold'>adult special needs</span> client, they are assessed on
                                how
                                they are
                                transitioning
                                into the next phase of their life, whether that is college or entering the work
                                force or
                                moving out of their parents home. Teaching skills to enable these young adults to
                                succeed. The approach to the <span
                                    className='font-semibold'>geriatric</span> client is based on the belief that
                                age is
                                a
                                relative idea and you can be and do all you can at any age. Acknowledging that over
                                time
                                the human mind, body and spirit goes through tremendous challenges and losses but
                                where
                                there is life, there is hope. Everyone can be productive and provide a service to
                                mankind. A comprehensive wellness program is developed following an evaluation of
                                physical, psychological, nutritional needs, cognitive functioning, social and
                                environmental situation is performed in the clients home. </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}