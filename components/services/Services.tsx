import Link from "next/link";
import React from "react";
import { geriatricOptions } from "../../constants/services";
import { Card } from "../card/Card";

export const Services = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center w-full h-[761px] bg-gradient-to-r from-lightBlue to-green shadow-banner">
      <h1 className="mt-[64px] font-bold text-[48px] drop-shadow-3xl">Services</h1>
      <p className="font-medium text-[18px] text-[#707070]">See What We Have To Offer</p>
      <div className="mt-[16px]">
        <Card src="assets/photos/geriatric.jpeg" title='GERIATRIC CARE AND ADULTS WITH SPECIAL NEEDS' iconSrc='assets/icon/card/card-check.png' options={geriatricOptions.map((t)=>({label: t}))}/>
      </div>
      </div>
    </div>
  );
};
