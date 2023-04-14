import Link from "next/link";
import React, {useContext} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {BlogCard} from "../card/BlogCard";
import moment from 'moment'
import {BlogContext} from "../../context/BlogContext";
import {Post} from "../../context/BlogContext";
import {Zoom, Fade} from "react-awesome-reveal";
import {convert} from 'html-to-text';

export const BlogSection = () => {
    const {posts, author} = useContext(BlogContext)

    return (
        <div className="w-full h-full flex justify-center">
            <div className="flex flex-col items-center w-full h-full">
                <Fade cascade>
                    <h1 className="mt-[24px] font-bold dark:text-white text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl">Blog</h1>
                    <p className="font-medium text-[14px] sm:text-[18px] text-[#707070]">Most Recent Posts</p>
                </Fade>
                <div className="flex flex-col lg:flex-row gap-6 mt-[16px]">
                    {posts?.map((p: Post, i: number) => {
                        if (i <= 2) {
                            return (
                                <Zoom duration={500} key={i}>
                                    <BlogCard key={i}
                                              src={p.thumbnail}
                                              profileSrc={author?.image ?? ''}
                                              link={p.link}
                                              author={p.author}
                                              title={p.title}
                                              date={moment(p.pubDate).format('MMMM Do YYYY')}
                                              desc={`${convert(p.content.substring(0, 220).slice(109))}...`}/>
                                </Zoom>

                            )
                        }
                    })}
                </div>
                <Link href='/blog'
                      className="flex items-center mt-[38px] mb-[38px] border border-lightBlue text-lightBlue text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60">More
                    Blogs <BiRightArrowAlt className="mt-[3px] ml-[1px] h-6 w-6"/></Link>
            </div>
        </div>
    );
};