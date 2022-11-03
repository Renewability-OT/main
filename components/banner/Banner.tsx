import Link from "next/link";
import React from "react";

export const Banner = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="mt-24 w-[1180px] h-[680px] rounded-3xl rounded-br-[300px] bg-gradient-to-r from-green to-lightBlue">
        <p className="absolute uppercase text-white font-extrabold text-[56px] text-center w-[28rem] top-48 left-52 drop-shadow-3xl leading-[4.5rem]">
          Occupational Therapy <br />
          For All Ages
        </p>
        <p className="absolute top-[26rem] text-[22px] left-[17.3rem] drop-shadow-4xl">
          Believing In The Power Of You!
        </p>
        <Link
          href=""
          className="absolute top-[29rem] text-white font-bold left-[17.8rem] border py-2 px-7 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton"
        >
          Book Now
        </Link>
        <Link
          href=""
          className="absolute top-[29rem] text-white font-bold left-[26.8rem] border py-2 px-5 rounded-xl transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton"
        >
          Our Services
        </Link>
        <img
          src="/assets/illustrations/Lifesavers-Caretaking.png"
          className="w-108 absolute bottom-[-6rem] right-36"
        />
      </div>
    </div>
  );
};
