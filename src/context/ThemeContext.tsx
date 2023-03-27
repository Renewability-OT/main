import React, {createContext, ReactNode, useEffect, useState} from 'react';

interface Props {
    children?: ReactNode
}

interface Context {
    darkMode?: boolean
    toggleDarkMode: () => void
}

export const ThemeContext = createContext<Context>({
    darkMode: undefined,
    toggleDarkMode: () => {
    }
});

export const ThemeContextProvider: React.FC<Props> = ({children}) => {
    const [darkMode, setDarkMode] = useState<boolean>()

    useEffect(() => {
        const data = localStorage.getItem('theme')
        if (data !== null) {
            setDarkMode(JSON.parse(data))
        }

    }, [])

    useEffect(() => {
        if (darkMode !== undefined) {
            localStorage.setItem('theme', JSON.stringify(darkMode))
        }
    }, [darkMode])
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

