import React, {useContext, useRef, useState} from 'react'
import {PopupModal} from "../modals/PopupModal";
import {ErrorMessage, Field, Form, Formik, FormikProps} from 'formik';
import {contactSchema} from "../../util/schemas";
import {ClassNames} from "../../util/ClassNames";
import emailjs from '@emailjs/browser';
import {NotificationContext} from "../../context/NotificationContext";
import {NotificationType} from "../../types/notification";


interface Props {
    showModal: boolean
    setShowModal: () => void
}

interface FormDetails {
    name: string,
    email: string,
    message: string,
}

const initialDetails: FormDetails = {
    name: '',
    email: '',
    message: '',
}

export const ContactForm: React.FC<Props> = ({showModal, setShowModal}) => {
    const formikRef = useRef<FormikProps<any> | null>(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const {setNotification} = useContext(NotificationContext)

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (formikRef.current !== null) {
            emailjs.send('service_eeza7is', 'template_75ya3ap', formikRef.current.values, 'UgL7OxWor9clAOjxf')
                .then(() => {
                    setNotification({message: "Your message has been sent!", type: NotificationType.Success})
                }, (error) => {
                    setNotification({message: error.message, type: NotificationType.Error})
                });
        }
        setShowModal()
    };
    return (
        <PopupModal title='Contact Us' visible={showModal} cancelButtonText='Cancel'
                    onCancel={setShowModal}
                    onSubmit={onSubmit}
                    submitButtonText='Submit' disableSubmit={isDisabled}>
            <Formik
                innerRef={formikRef}
                initialValues={initialDetails}
                validationSchema={contactSchema}
                initialErrors={{name: 'Required', email: 'Required'}}
                onSubmit={onSubmit}
            >
                {({handleSubmit, errors, isValid}) => {
                    setIsDisabled(!isValid)
                    return (
                        <Form className='w-full sm:w-[500px]' onSubmit={handleSubmit}>
                            <p className='font-light text-sm mb-2'>Please Contact Diane Gubisch, PHD, OTR/L For More
                                Information
                                On How
                                Renewability OT, LLC Can
                                Best Serve You. Looking Forward To Hearing From You!</p>
                            <p className='font-semibold text-sm mb-4'>Call (301)-538-1330</p>
                            <div className='mb-2'>
                                <Field type="name" name="name" id='name' placeholder='Your Name'
                                       className={ClassNames(errors.name === 'Name is a required field' ? 'border-2 border-red-500' : '', 'w-full h-10 bg-[#F1F2F8] rounded-lg p-2 mb-2 text-sm')}/>
                                <ErrorMessage name="name" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                            <div className='mb-2'>
                                <Field type="email" name="email" id='email' placeholder='Your Email'
                                       className={ClassNames(errors.email === 'Email is a required field' ? 'border-2 border-red-500' : '', 'w-full h-10 bg-[#F1F2F8] rounded-lg p-2 mb-2 text-sm')}/>
                                <ErrorMessage name="email" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                            <div className='mb-2'>
                                <Field component='textarea' rows={4} name="message" id='message'
                                       placeholder='Your Message'
                                       className='w-full bg-[#F1F2F8] rounded-lg p-2 text-sm'/>
                                <ErrorMessage name="textarea" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </PopupModal>
    )
}