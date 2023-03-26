import Link from "next/link";
import React, {useEffect, useState} from "react";
import {BiRightArrowAlt} from "react-icons/bi";
import {BlogCard} from "../card/BlogCard";
import axios from 'axios';
import moment from 'moment'


const {convert} = require('html-to-text');

export const Blog = () => {
    const [posts, setPosts] = useState<any>()
    const [avatar, setAvatar] = useState<any>()
    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@colinbreeding";
    useEffect(() => {
        axios({
            method: 'get',
            url: mediumURL,
            params: {},
        }).then((response) => {
            // handle success
            console.log(response.data);
            setPosts(response.data.items)
            setAvatar(response.data.feed.image)
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])
    console.log(posts)
    return (
        <div className="w-full h-full flex justify-center">
            <div className="flex flex-col items-center w-full h-full">
                <h1 className="mt-[24px] font-bold dark:text-white text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-3xl">Blog</h1>
                <p className="font-medium text-[14px] sm:text-[18px] text-[#707070]">Most Recent Posts</p>
                <div className="flex flex-col lg:flex-row gap-6 mt-[16px]">
                    {posts?.map((p: any, i: number) => {
                        if (i <= 2) {
                            return (
                                <BlogCard src={p.thumbnail}
                                          profileSrc={avatar}
                                          link={p.link}
                                          author={p.author}
                                          title={p.title}
                                          date={moment(p.pubDate).format('MMMM Do YYYY')}
                                          desc={`${convert(p.content.substring(0, 220).slice(109))}...`}/>

                            )
                        }
                    })}
                </div>
                <Link href=''
                      className="flex items-center mt-[38px] mb-[38px] border border-lightBlue text-lightBlue text-[14px] xs:text-[18px] px-6 py-3 font-medium rounded-full transition ease-in-out duration-300 shadow-Button hover:shadow-darkButton hover:opacity-60">Continue
                    Reading <BiRightArrowAlt className="mt-[3px] ml-[1px] h-6 w-6"/></Link>
            </div>
        </div>
    );
};