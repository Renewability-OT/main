import Link from "next/link";
import React from "react";

interface Props {
    src: string
    title: string
    date: string
    desc: string
}

export const BlogCard: React.FC<Props> = ({title, src, date, desc}) => {
    return (
    <div className="w-[370px] h-[485px] bg-[#FEFEFE] rounded-2xl drop-shadow-4xl">
        <img src={src} className="w-full h-[245px] rounded-t-2xl object-cover object-centerTopBlog"/>
        <p className="flex items-center justify-center leading-5 w-full h-16 text-center font-bold text-[20px]">{title}</p>
        <div className="absolute bottom-20">
                <p className="ml-8 mr-8 text-[16px] leading-5 text-center font-light">{desc}</p>
        </div>
        <div className="w-full flex justify-center absolute bottom-6">
        <p className="absolute left-10 top-1 font-light text-[#A7A4A4]">{date}</p>
        <Link href='' className="border border-pink text-pink font-light text-15px px-6 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Read More</Link>
        </div>
    </div>
    )
}