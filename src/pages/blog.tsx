import {Layout} from "../components/layout/Layout";
import React, {useContext} from "react";
import {BlogContext} from "../context/BlogContext";
import moment from "moment/moment";
import {ArticleCard} from "../components/card/ArticleCard";
import {convert} from "html-to-text";
import AnimatedText from "../components/animation/AnimatedText";

export default function Blog() {
    const {posts, author} = useContext(BlogContext)

    return (
        <>
            <Layout title="Blog" removeFooter>
                <div className='w-full h-full'>
                    <div
                        className='w-full fixed top-0 h-[400px] flex flex-col justify-center items-center mt-20 bg-leaf2Bg lg:bg-leafBg bg-cover bg-no-repeat bg-[center_top_0rem] lg:bg-[left_top_-12rem] z-[-10]'>
                        <AnimatedText text='Welcome
                            To Our Blog'
                                      classNames="font-bold text-black text-[28px] xs:text-[32px] sm:text-[38px] drop-shadow-blog"/>
                        <AnimatedText text='Latest
                            Stories'
                                      classNames="h-fit font-medium text-[14px] sm:text-[18px] text-[#707070] drop-shadow-3xlWhite lg:drop-shadow-blog"/>
                    </div>

                    <div
                        className='w-full h-full mt-[480px] mb-16 flex flex-col items-center m-auto bg-light dark:bg-dark z-10'>
                        <div className='w-full px-6 md:px-12 lg:px-0 lg:w-[900px] h-full'>
                            <p className="w-4/5 h-fit mt-8 mb-2 ml-5 font-light text-[18px] text-[#A7A4A4]">Most Recent
                                Posts</p>
                            {posts?.map((p, i) => {
                                return (
                                    <ArticleCard key={i}
                                                 src={p.thumbnail}
                                                 profileSrc={author?.image ?? ''}
                                                 link={p.link}
                                                 author={p.author}
                                                 title={p.title}
                                                 date={moment(p.pubDate).format('MMMM Do YYYY')}
                                                 desc={`${convert(p.content.substring(0, 340).slice(109))}...`}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}