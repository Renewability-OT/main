import Link from "next/link";
import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { blog1, blog2, blog3 } from "../../constants/blogs";
import { BlogCard } from "../card/BlogCard";

export const Blog = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center w-full h-[761px]">
      <h1 className="mt-[24px] font-bold text-[38px] dark:text-lightBlue drop-shadow-3xl">Blog</h1>
      <p className="font-medium text-[18px] text-[#707070]">Most Recent Posts</p>
      <div className="grid grid-cols-3 gap-6 mt-[16px]">
        <BlogCard src="assets/photos/autism-pic.jpeg" title='HOW OT HELPS WITH AUTISM SPECTUM DISORDER' date={blog1.date} desc={blog1.desc}/>
        <BlogCard src="assets/photos/tree-swing.jpeg" title='HOW OT HELPS WITH ADHD' date={blog2.date} desc={blog2.desc}/>
        <BlogCard src="assets/photos/wheelchair.jpeg" title='BELIEVE IT TO SEE IT' date={blog3.date} desc={blog3.desc}/>
      </div>
      <Link href='' className="flex mt-[38px] border border-lightBlue text-lightBlue text-15px px-6 py-3 font-medium text-[20px] rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60">Continue Reading <BiRightArrowAlt className="mt-[3px] ml-[1px] h-6 w-6" /></Link>
      </div>
    </div>
  );
};