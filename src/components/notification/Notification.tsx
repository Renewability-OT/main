import React, {useContext} from 'react'
import {NotificationType} from "../../types/notification";
import {NotificationContext} from "../../context/NotificationContext";
import {ClassNames} from "../../util/ClassNames";
import {CheckCircleIcon, XCircleIcon, XMarkIcon} from "@heroicons/react/20/solid";

export const Notification: React.FC = () => {
    const {notification, setNotification} = useContext(NotificationContext)
    const isError = notification.type === NotificationType.Error

    if (!notification.message) return null

    return (
        <div className="fixed top-0 md:top-4 md:right-4 w-full flex justify-end z-50">
            <div
                className={ClassNames(
                    isError ? 'bg-notificationRed' : 'bg-notificationGreen',
                    'rounded-md p-4 md:min-w-[250px] md:max-w-[400px]',
                )}
            >
                <div className="flex">
                    <div className="flex-shrink-0">
                        {isError ? (
                            <XCircleIcon className={ClassNames('text-notificationIconRed', 'h-5 w-5')}
                                         aria-hidden="true"/>
                        ) : (
                            <CheckCircleIcon className={ClassNames('text-notificationIconGreen', 'h-5 w-5')}
                                             aria-hidden="true"/>
                        )}
                    </div>
                    <div className="ml-3">
                        <p className={ClassNames(isError ? 'text-notificationTextRed' : 'text-notificationTextGreen', 'text-sm font-medium break-words')}>
                            {notification.message}
                        </p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                type="button"
                                onClick={() => setNotification({message: '', type: NotificationType.Success})}
                                className={ClassNames(
                                    isError
                                        ? 'bg-notificationRed text-notificationIconRed hover:bg-notificationIconHoverRed focus:ring-offset-red-50 focus:ring-red-600'
                                        : 'bg-notificationGreen text-notificationIconGreen hover:bg-notificationIconHoverGreen focus:ring-offset-green-50 focus:ring-green-600',
                                    'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                                )}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XMarkIcon className="h-5 w-5" aria-hidden="true"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}