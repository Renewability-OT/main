import Link from "next/link";
import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {
    geriatricOptions,
    pediatricOptions,
    reikiOptions,
} from "../../constants/services";
import {ServiceCard} from "../card/ServiceCard";

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
                <div className="flex flex-col lg:flex-row gap-6 mt-[16px]">
                    <ServiceCard
                        src="assets/photos/geriatric.jpeg"
                        title="Geriatric Care And Adults With Special Needs"
                        iconSrc="assets/icon/card/card-check.png"
                        options={geriatricOptions.map((t) => ({label: t}))}
                    />
                    <ServiceCard
                        src="assets/photos/pediatric.jpeg"
                        title="Pediatric Care"
                        iconSrc="assets/icon/card/card-check.png"
                        options={pediatricOptions.map((t) => ({label: t}))}
                    />
                    <ServiceCard
                        src="assets/photos/reiki2.jpeg"
                        title="Reiki"
                        iconSrc="assets/icon/card/card-check.png"
                        options={reikiOptions.map((t) => ({label: t}))}
                    />
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
