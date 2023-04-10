import React, {createContext, ReactNode, useEffect, useState} from 'react'
import {Notification, NotificationType} from "../types/notification";

interface Props {
    children?: ReactNode
}

interface Context {
    notification: Notification
    setNotification: (notification: Notification) => void
}

export const NotificationContext = createContext<Context>({
    notification: {message: '', type: NotificationType.Success},
    setNotification: () => {
    },
})

export const NotificationProvider: React.FC<Props> = ({children}) => {
    const [notification, setNotification] = useState<Notification>({message: '', type: NotificationType.Success})

    useEffect(() => {
        if (!notification.message) return
        setTimeout(() => {
            setNotification((prev: any) => ({...prev, message: ''}))
        }, 12000)
    }, [notification])

    return (
        <NotificationContext.Provider value={{notification, setNotification}}>{children}</NotificationContext.Provider>
    )
}