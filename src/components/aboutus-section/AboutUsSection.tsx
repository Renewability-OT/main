import Link from "next/link";
import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";

export const AboutUsSection = () => {
    return (
        <div className="w-full flex justify-center mb-10 lgXl:mb-0 lgXl:mt-20 px-6 sm:px-12">
            <div
                className="flex flex-col lgXl:flex-row justify-center items-center mt-6 max-w-[1180px] h-full rounded-3xl rounded-br-[300px]">
                <div className="relative m-auto left-0 right-0 top-[7px]">
                    <img alt="aboutus" src="/assets/illustrations/Lifesavers-Caretaking-2.png"
                         className='max-w-[410px] max-h-[210px] xs:max-w-[510px] xs:max-h-[310px] tablet:max-w-[580px] tablet:max-h-[380px] lg:max-w-[560px] lg:max-h-[420px] lgXl:max-w-[590px] lgXl:max-h-[490px] xl:max-w-[650px] xl:max-h-[450px]'/>
                </div>
                <div
                    className="flex flex-col items-center text-center bg-AboutUsBg rounded-3xl lgXl:rounded-bl-[150px] w-full h-full sm:max-w-[700px] sm:max-h-[400px] lgXl:max-h-[500px]">
                    <h1 className="mt-[17.61px] text-lightBlue font-bold text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl">
                        About Us
                    </h1>
                    <p className="font-medium text-[14px] sm:text-[18px] text-[#707070] dark:text-[#FEFEFE]">
                        Who Are We?
                    </p>
                    <p className="xs:px-8 lg:mt-[15px] font-light text-[15px] p-2 sm:text-[20px] text-[#2D3436] dark:text-[#FEFEFE]">
                        ReNewAbility OT is a private, in home, Maryland Occupational Therapy
                        practice for psychological and physical issues, owned by Diane
                        Gubisch, PhD, OTR/L, ADHD-CCSP, ASD-clinical specialist, and Art
                        Therapist, which incorporates holistic wellness practices such as
                        Reiki, Therapeutic Massage, and spiritual counseling.
                    </p>
                    <Link
                        href="/aboutus"
                        className="flex items-center justify-center mt-[8px] mb-6 border border-lightBlue w-[150px] h-[38px] lg:w-[160px] lg:h-[45px] rounded-full text-lightBlue font-medium text-[16px] transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
                    >
                        Learn More
                        <BiRightArrowAlt className="ml-[1px] h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};
