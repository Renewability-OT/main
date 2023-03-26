import Link from "next/link";
import React from "react";

interface Options {
    label: string
}

interface Props {
    src: string
    iconSrc: string
    title: string
    options: Options[]
}

export const ServiceCard: React.FC<Props> = ({title, src, iconSrc, options}) => {
    return (
        <div
            className="bg-[#FEFEFE] w-[280px] h-[430px] xs:w-[310px] xs:h-[450px] sm:w-[370px] sm:h-[495px] lg:w-[310px] lg:h-[450px] bg-[#FEFEFE] rounded-2xl drop-shadow-4xl">
            <img alt='servicecard' src={src}
                 className="w-full h-[212px] rounded-t-2xl object-cover object-centerTopServices"/>
            <p className="text-black flex items-center justify-center mt-2 xs:mt-3 sm:mt-5 lg:mt-3 w-full h-12 px-4 sm:px-6 lg:px-4 text-center font-bold text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[18px] leading-6">{title}</p>
            <div className='w-full flex flex-col items-center'>
                <div className='mt-2 xs:mt-3'>
                    {options.map((n) => {
                        return (
                            <div className="flex items-center w-fit">
                                <img className='w-6 sm:w-8 lg:w-6 mb-3' src={iconSrc} alt='servicecardimg'/>
                                <p className="text-black ml-2 mb-3 xs:mb-3 text-xs xs:text-sm sm:text-md lg:text-sm w-fit">{n.label}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full flex justify-center mt-1 xs:mt-2 sm:mt-3 lg:mt-2">
                <Link href=''
                      className="border border-pink text-pink font-light text-[11px] xs:text-[13px] sm:text-[16px] lg:text-[13px] px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn
                    More</Link>
            </div>
        </div>
    )
}