import React, {createContext, ReactNode, useEffect, useState} from 'react';
import axios from "axios";

interface Props {
    children?: ReactNode
}

export interface Post {
    author: string
    categories: []
    content: string
    description: string
    enclosure: {}
    guid: string
    link: string
    pubDate: string
    thumbnail: string
    title: string
}

export interface Author {
    author: string
    description: string
    image: string
    link: string
    title: string
    url: string
}

interface Context {
    posts: Post[]
    author?: Author
    featuredArticle?: Post
}

export const BlogContext = createContext<Context>({
    posts: [],
    author: undefined,
    featuredArticle: undefined
})

export const BlogContextProvider: React.FC<Props> = ({children}) => {
    const [posts, setPosts] = useState<any>()
    const [author, setAuthor] = useState<Author>()
    const [featuredArticle, setFeaturedArticle] = useState()
    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@colinbreeding";
    useEffect(() => {
        axios({
            method: 'get',
            url: mediumURL,
            params: {},
        }).then((response) => {
            // handle success
            setPosts(response.data.items)
            setAuthor(response.data.feed)
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [])

    useEffect(() => {
        if (posts) {
            setFeaturedArticle(posts[0])
        }
    }, [posts])

    return (
        <BlogContext.Provider value={{posts, author, featuredArticle}}>
            {children}
        </BlogContext.Provider>
    )
}