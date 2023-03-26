import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";


interface Props {
    src: string
    title: string
    date: string
    desc: string
    author: string
    link: string
    profileSrc: string
}

export const BlogCard: React.FC<Props> = ({title, src, date, desc, author, link, profileSrc}) => {
    return (
        <div
            className="bg-[#FEFEFE] w-[280px] h-[470px] xs:w-[310px] xs:h-[470px] sm:w-[370px] sm:h-[445px] lg:w-[310px] lg:h-[470px] bg-[#FEFEFE] rounded-2xl drop-shadow-4xl">
            <img alt='blogcard' src={src} className="w-full h-1/2 rounded-t-2xl object-cover object-centerTopBlog"/>
            <div className='w-full text-center mt-2'>
                <p className="font-light text-xs text-[#A7A4A4]">
                    {date}</p>
            </div>
            <p className="w-full text-black flex items-center justify-center mt-2 w-full h-12 px-4 sm:px-6 lg:px-4 text-center font-bold text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[18px] leading-6">{title}</p>
            <div className="flex mt-2">
                <p className="ml-8 mr-8 text-[16px] leading-5 text-center font-light">{desc}</p>
            </div>
            <div className="w-full flex justify-between px-6 items-center mt-5">
                <div className='flex items-center gap-2'>
                    <img alt='avatar' src={profileSrc}
                         className='w-7 h-7 rounded-full border border-black dark:border-white'/>
                    <p className="font-light text-xs font-normal text-black">
                        {author}</p>
                </div>
                <a href={link}
                   target="_blank" rel="noopener noreferrer"
                   className="flex items-center border border-pink text-pink font-light text-[11px] sm:text-[13px] px-4 py-1 rounded-full transition ease-in-out duration-300 hover:bg-pink hover:text-[#FEFEFE]">Read
                    More <BiRightArrowAlt className="h-4 w-4"/></a>
            </div>
        </div>
    )
}