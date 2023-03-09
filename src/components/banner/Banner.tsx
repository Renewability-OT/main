import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="w-full h-full flex justify-center px-6 sm:px-12">
      <div
        className="w-full flex flex-col items-center mt-24 max-w-[1180px] h-[520px] sm:h-[540px] tablet:h-[640px] lg:h-[680px] rounded-3xl lg:rounded-br-[300px] bg-gradient-to-r from-green to-lightBlue shadow-banner">
        <div
          className="w-full flex flex-col flex-1 items-center lg:items-start text-center mt-16 xs:mt-12 tablet:mt-16 lg:mt-20">
          <div className="w-[90%] lg:w-[50%] lg:ml-12 flex flex-col items-center">
            <p
              className="w-72 xs:w-full uppercase text-white font-extrabold text-[28px] xs:text-[32px] sm:text-[38px] tablet:text-[48px] lg:text-[58px] xl:text-[64px] drop-shadow-3xl leading-9 sm:leading-[3rem] tablet:leading-[3.5rem] lg:leading-[4.5rem]">
              Occupational Therapy <br />
              For All Ages
            </p>
            <p className="font-medium text-[15px] sm:text-[20px] drop-shadow-4xl mt-2">
              Believing In The Power Of You!
            </p>
            <div className="w-full flex flex-col xs:flex-row justify-center items-center mt-4 gap-2">
              <Link
                href=""
                className="w-[130px] xl:w-[160px] text-white font-bold border py-1 lg:py-2 px-3 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
              >
                Book Now
              </Link>
              <Link
                href=""
                className="w-[130px] xl:w-[160px] text-white font-bold border py-1 lg:py-2 px-3 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div
            className="w-full flex flex-1 ml-6 justify-center lg:relative lg:left-48 lg:bottom-28 xl:left-56 xl:bottom-36 items-end ">
            <img
              className="max-w-[410px] max-h-[210px] xs:max-w-[510px] xs:max-h-[310px] tablet:max-w-[580px] tablet:max-h-[380px] lg:max-w-[620px] lg:max-h-[420px] xl:max-w-[650px] xl:max-h-[450px]"
              alt="bannerimg"
              src="/assets/illustrations/Lifesavers-Caretaking.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
