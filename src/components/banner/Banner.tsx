import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="w-full flex justify-center px-12">
      <div className="grid grid-row-2 lg:grid-cols-2 items-center mt-24 w-[1180px] h-[680px] rounded-3xl rounded-br-[300px] bg-gradient-to-r from-green to-lightBlue shadow-banner">
        <div className="text-center mb-36 ml-20">
          <p className="uppercase text-white font-extrabold text-[56px] drop-shadow-3xl leading-[4.5rem]">
            Occupational Therapy <br />
            For All Ages
          </p>
          <p className="font-medium text-[22px] drop-shadow-4xl mt-4">
            Believing In The Power Of You!
          </p>
          <div className="mt-6 ">
            <Link
              href=""
              className="text-white font-bold border py-3 px-9 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton mr-2 hover:opacity-60"
            >
              Book Now
            </Link>
            <Link
              href=""
              className="text-white font-bold border py-3 px-7 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="mt-56">
          <img alt='bannerimg' src="/assets/illustrations/Lifesavers-Caretaking.png" />
        </div>
      </div>
    </div>
  );
};
