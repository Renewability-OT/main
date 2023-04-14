import React, {createContext, ReactNode, useState} from 'react';

interface Props {
    children?: ReactNode
}

interface Context {
    scrollId: string
    setScrollId: (scrollId: string) => void
}

export const ScrollContext = createContext<Context>({
    scrollId: '',
    setScrollId: () => {
        // do nothing
    }
})

export const ScrollContextProvider: React.FC<Props> = ({children}) => {
    const [scrollId, setScrollId] = useState<string>('')

    return (
        <ScrollContext.Provider value={{scrollId, setScrollId}}>
            {children}
        </ScrollContext.Provider>
    )
}