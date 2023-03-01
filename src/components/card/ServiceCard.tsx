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
    <div className="w-[370px] h-[495px] bg-[#FEFEFE] rounded-2xl drop-shadow-4xl">
        <img alt='servicecard' src={src} className="w-full h-[212px] rounded-t-2xl object-cover object-centerTopServices"/>
        <p className="flex items-center justify-center mt-[12px] w-full h-16 text-center font-bold text-[20px]">{title}</p>
        <div className="absolute bottom-20">
        {options.map((n)=>{
            return (
                <div className="flex items-center w-full mt-3 ml-[calc(370px/6)] ">
                <img src={iconSrc} alt='servicecardimg'/>
                <p className="ml-2">{n.label}</p>
                </div>
            )
        })}
        </div>
        <div className="w-full flex justify-center absolute bottom-6">
        <Link href='' className="border border-pink text-pink font-light text-15px px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Learn More</Link>
        </div>
    </div>
    )
}