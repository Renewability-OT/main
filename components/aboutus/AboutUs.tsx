import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

export const AboutUs = () => {
  return (
    <div className="w-full flex justify-center px-12">
      <div className="grid grid-row-2 lg:grid-cols-2 items-center mt-6 w-[1180px] h-full rounded-3xl rounded-br-[300px]">
        <div className="w-[700px] h-full">
          <img src="assets\illustrations\Lifesavers-Caretaking-2.png" />
        </div>
        <div className="flex flex-col items-center text-center bg-AboutUsBg ml-8 rounded-r-[30px] rounded-t-[30px] rounded-bl-[150px] w-[500px] h-[400px] rounded-8">
          <h1 className="mt-[17.61px] text-lightBlue font-bold text-[38px] drop-shadow-3xl">
            About Us
          </h1>
          <p className="font-medium text-[15px] text-[#707070] dark:text-[#FEFEFE]">
            Who Are We?
          </p>
          <p className="mt-[15px] font-light text-[20px] text-[#2D3436] drop-shadow-3xl dark:text-[#FEFEFE]">
            ReNewAbility OT is a private, in home, Maryland Occupational Therapy
            practice for psychological and physical issues, owned by Diane
            Gubisch, PhD, OTR/L, ADHD-CCSP, ASD-clinical specialist, and Art
            Therapist, which incorporates holistic wellness practices such as
            Reiki, Therapeutic Massage, and spiritual counseling.
          </p>

          <Link
            href=""
            className="flex items-center justify-center mt-[23px] border border-lightBlue w-[180px] h-[56px] rounded-full text-lightBlue font-medium text-[16px] transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
          >
            Learn More
            <BiRightArrowAlt className="ml-[1px] h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};
