import Link from "next/link";
import React from "react";

export const BannerSection = () => {
    return (
        <div className="w-full h-full flex justify-center px-6 sm:px-12 mt-28 md:mt-32">
            <div
                className="w-full flex flex-col items-center max-w-[1180px] h-[520px] sm:h-[540px] tablet:h-[640px] lg:h-[680px] rounded-3xl lgXl:rounded-br-[300px] bg-gradient-to-r from-green to-lightBlue shadow-banner">
                <div
                    className="w-full flex flex-col flex-1 items-center lgXl:items-start text-center mt-16 xs:mt-12 tablet:mt-16 lgXl:mt-20">
                    <div className="w-[90%] lgXl:w-[50%] lgXl:ml-12 flex flex-col items-center z-10">
                        <p
                            className="w-72 xs:w-full uppercase text-white font-extrabold text-[28px] xs:text-[32px] sm:text-[38px] tablet:text-[48px] lgXl:text-[58px] xl:text-[64px] drop-shadow-3xl leading-9 sm:leading-[3rem] tablet:leading-[3.5rem] lgXl:leading-[4.5rem]">
                            Occupational Therapy <br/>
                            For All Ages
                        </p>
                        <p className="font-medium text-[15px] sm:text-[20px] mt-2">
                            Believing In The Power Of You!
                        </p>
                        <div
                            className="w-full flex flex-col xs:flex-row justify-center items-center mt-4 lg:mt-3 gap-2">
                            <Link
                                href=""
                                className="w-[130px] xl:w-[160px] text-white font-bold border py-1 lg:py-2 px-3 rounded-lg transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
                            >
                                Book Now
                            </Link>
                            <Link
                                href="/services"
                                className="w-[130px] xl:w-[160px] text-white font-bold border py-1 lg:py-2 px-3 rounded-lg transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                    <div
                        className="w-full z-0 flex flex-1 ml-6 justify-center lgXl:relative lgXl:bottom-[125px] lgXl:w-[600px] lgXl:m-auto lgXl:left-56 lgXl:left-60 xl:bottom-[152px] items-end ">
                        <img
                            className="max-w-[410px] max-h-[210px] xs:max-w-[510px] xs:max-h-[310px] tablet:max-w-[580px] tablet:max-h-[380px] lg:max-w-[620px] lg:max-h-[420px] xl:max-w-[650px] xl:max-h-[450px]"
                            alt="bannerimg"
                            src="/assets/illustrations/Lifesavers-Caretaking.png"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
