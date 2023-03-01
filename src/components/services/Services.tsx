import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  geriatricOptions,
  pediatricOptions,
  reikiOptions,
} from "../../constants/services";
import { ServiceCard } from "../card/ServiceCard";

export const Services = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center w-full h-[761px] bg-gradient-to-r from-lightBlue to-green">
        <h1 className="mt-[24px] font-bold text-[38px] drop-shadow-3xl">
          Services
        </h1>
        <p className="font-medium text-[18px] text-[#707070]">
          See What We Have To Offer
        </p>
        <div className="grid grid-cols-3 gap-6 mt-[16px]">
          <ServiceCard
            src="assets/photos/geriatric.jpeg"
            title="GERIATRIC CARE AND ADULTS WITH SPECIAL NEEDS"
            iconSrc="assets/icon/card/card-check.png"
            options={geriatricOptions.map((t) => ({ label: t }))}
          />
          <ServiceCard
            src="assets/photos/pediatric.jpeg"
            title="PEDIATRIC NEEDS"
            iconSrc="assets/icon/card/card-check.png"
            options={pediatricOptions.map((t) => ({ label: t }))}
          />
          <ServiceCard
            src="assets/photos/reiki.jpeg"
            title="REIKI"
            iconSrc="assets/icon/card/card-check.png"
            options={reikiOptions.map((t) => ({ label: t }))}
          />
        </div>
        <Link
          href=""
          className="flex mt-[38px] border border-white text-white text-15px px-6 py-3 font-medium text-[20px] rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
        >
          More Info <BiRightArrowAlt className="mt-[3px] ml-[1px] h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};
