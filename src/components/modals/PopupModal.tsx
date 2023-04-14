import React from 'react'
import {ClassNames} from "../../util/ClassNames";

interface Props {
    title: string | string[]
    children?: React.ReactNode
    cancelButtonText?: string
    submitButtonText?: string
    onCancel?: () => void
    onSubmit?: (e: any) => void
    visible?: boolean
    onTitleClick?: (t: string, idx: number) => void
    titleIndex?: number
    disableSubmit?: boolean
}

export const PopupModal: React.FC<Props> = ({
                                                title,
                                                children,
                                                cancelButtonText,
                                                submitButtonText,
                                                onSubmit,
                                                onCancel,
                                                visible,
                                                onTitleClick,
                                                titleIndex,
                                                disableSubmit,
                                            }) => {
    return (
        <div
            className={ClassNames(
                visible ? 'block show' : 'hidden',
                'modal backdrop-brightness-[0.3] fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto flex justify-center px-7 z-50',
            )}
            tabIndex={-1}
            role="dialog"
        >
            <div
                className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none flex flex-col justify-center items-center">
                <div
                    className="modal-content border-none shadow-lg relative flex flex-col pointer-events-auto bg-white dark:bg-dark bg-clip-padding rounded-md outline-none text-current">
                    <div
                        className={ClassNames(
                            Array.isArray(title) ? 'py-2 px-4 pb-0' : 'py-4 px-8',
                            'modal-header flex flex-shrink-0 items-center justify-between border-b border-gray-200 dark:border-gray-600 rounded-t-md',
                        )}
                    >
                        {Array.isArray(title) ? (
                            title.map((t, index) => {
                                return (
                                    <h5
                                        key={t}
                                        className={ClassNames(
                                            titleIndex === index
                                                ? 'text-lg font-semibold border-2 border-b-0 rounded-t-lg border-gray-200'
                                                : 'text-xs font-normal cursor-pointer',
                                            'p-2 pb-0.5 leading-normal text-gray-800',
                                        )}
                                        id="modalCenteredScrollableLabel"
                                        onClick={() => {
                                            if (onTitleClick) onTitleClick(t, index)
                                        }}
                                    >
                                        {t}
                                    </h5>
                                )
                            })
                        ) : (
                            <h5 className="text-xl font-medium leading-normal text-gray-800 dark:text-white"
                                id="modalCenteredScrollableLabel">
                                {title}
                            </h5>
                        )}
                        <button
                            type="button"
                            className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={onCancel}
                        />
                    </div>
                    <div className="modal-body relative min-h-[200px] sm:min-h-[200px] py-4 px-8">{children}</div>
                    <div
                        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 dark:border-gray-600 rounded-b-md">
                        {cancelButtonText && (
                            <button
                                type="button"
                                onClick={onCancel}
                                className="inline-block px-6 py-2.5 font-medium text-xs hover:text-gray-800 dark:text-white leading-tight transition duration-150 ease-in-out"
                                data-bs-dismiss="modal"
                            >
                                {cancelButtonText}
                            </button>
                        )}
                        {submitButtonText && (
                            <button
                                type="button"
                                disabled={disableSubmit}
                                onClick={onSubmit}
                                className="inline-block disabled:opacity-40 px-6 py-2.5 bg-lightBlue text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-darkBlue hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ml-1"
                            >
                                {submitButtonText}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}