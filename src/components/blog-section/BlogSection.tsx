import React, {useContext, useEffect, useRef} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {BlogCard} from "../card/BlogCard";
import moment from 'moment'
import {BlogContext} from "../../context/BlogContext";
import {Post} from "../../context/BlogContext";
import {convert} from 'html-to-text';
import AnimatedText from "../animation/AnimatedText";
import {motion, useAnimation, useInView} from "framer-motion";

export const BlogSection = () => {
    const {posts, author} = useContext(BlogContext)

    return (
        <div className="w-full h-full px-6 flex justify-center">
            <div className="flex flex-col items-center w-full h-full">
                <AnimatedText text='Blog'
                              classNames="mt-[24px] font-bold dark:text-white text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl"/>
                <AnimatedText text='Most Recent Posts'
                              classNames="font-medium text-[14px] sm:text-[18px] text-[#707070]"/>
                <div className="flex flex-col lg:flex-row gap-6 mt-[16px]">
                    {posts?.map((p: Post, i: number) => {
                        if (i <= 2) {
                            return (
                                <BlogCard key={i}
                                          src={p.thumbnail}
                                          profileSrc={author?.image ?? ''}
                                          link={p.link}
                                          author={p.author}
                                          title={p.title}
                                          date={moment(p.pubDate).format('MMMM Do YYYY')}
                                          desc={`${convert(p.content.substring(0, 220).slice(109))}...`}/>

                            )
                        }
                    })}
                </div>
                <motion.a href='/blog'
                          whileHover={{scale: 1.1}}
                          whileTap={{scale: 1.0}}
                          transition={{type: "spring", stiffness: 400, damping: 17}}
                          className="flex items-center mt-[38px] mb-[38px] border border-lightBlue text-lightBlue text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full shadow-Button hover:shadow-darkButton">More
                    Blogs <BiRightArrowAlt className="mt-[3px] ml-[1px] h-6 w-6"/></motion.a>
            </div>
        </div>
    );
};