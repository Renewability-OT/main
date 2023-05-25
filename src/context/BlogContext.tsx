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
}

export const BlogContext = createContext<Context>({
    posts: [],
    author: undefined,
})

const initialState: Post[] = [
    {
        author: '',
        categories: [],
        content: '',
        description: '',
        enclosure: {},
        guid: '',
        link: '',
        pubDate: '',
        thumbnail: '',
        title: '',
    }
]

export const BlogContextProvider: React.FC<Props> = ({children}) => {
    const [posts, setPosts] = useState<Post[]>(initialState)
    const [author, setAuthor] = useState<Author>()
    const mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dgubisch";
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

    return (
        <BlogContext.Provider value={{posts, author}}>
            {children}
        </BlogContext.Provider>
    )
}