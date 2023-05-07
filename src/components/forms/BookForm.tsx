import React, {useContext, useRef, useState} from 'react'
import {PopupModal} from "../modals/PopupModal";
import {ErrorMessage, Field, Form, Formik, FormikProps} from 'formik';
import {bookSchema} from "../../util/schemas";
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
    service: string,
    message: string,
}

const initialDetails: FormDetails = {
    name: '',
    email: '',
    service: '',
    message: '',
}

export const BookForm: React.FC<Props> = ({showModal, setShowModal}) => {
    const formikRef = useRef<FormikProps<any> | null>(null)
    const [isDisabled, setIsDisabled] = useState(true)
    const {setNotification} = useContext(NotificationContext)

    const onSubmit = (e: any) => {
        e.preventDefault();
        if (formikRef.current !== null) {
            emailjs.send('service_eeza7is', 'template_l5kjyr3', formikRef.current.values, 'UgL7OxWor9clAOjxf')
                .then(() => {
                    setNotification({message: "Your message has been sent!", type: NotificationType.Success})
                }, (error) => {
                    setNotification({message: error.message, type: NotificationType.Error})
                });
        }
        setShowModal()
    };
    return (
        <PopupModal title='Book A Free Consultation' visible={showModal} cancelButtonText='Cancel'
                    onCancel={setShowModal}
                    onSubmit={onSubmit}
                    submitButtonText='Book Now' disableSubmit={isDisabled}>
            <Formik
                innerRef={formikRef}
                initialValues={initialDetails}
                validationSchema={bookSchema}
                initialErrors={{name: 'Required', email: 'Required'}}
                onSubmit={onSubmit}
            >
                {({handleSubmit, errors, values, touched, isValid}) => {
                    setIsDisabled(!isValid)
                    return (
                        <Form className='w-full sm:w-[500px]' onSubmit={handleSubmit}>
                            <p className='font-light text-sm mb-2 dark:text-white'>Please contact Diane Gubisch, PHD,
                                OTR/L for more
                                information
                                on how
                                Renewability OT, LLC can
                                best serve you. Looking forward to hearing from you!</p>
                            <p className='font-light text-sm mb-4 dark:text-white'>Once booked, Diane will reach out to
                                you ASAP via email to set up a free consultation!</p>
                            <div className='mb-2'>
                                <Field type="name" name="name" id='name' placeholder='Your Name'
                                       className={ClassNames(errors.name === 'Name is a required field' && touched.name === true ? 'border-2 border-red-500' : '', 'w-full h-10 bg-[#F1F2F8] rounded-lg p-2 mb-2 text-sm')}/>
                                <ErrorMessage name="name" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                            <div className='mb-2'>
                                <Field type="email" name="email" id='email' placeholder='Your Email'
                                       className={ClassNames(errors.email === 'Email is a required field' && touched.email === true ? 'border-2 border-red-500' : '', 'w-full h-10 bg-[#F1F2F8] rounded-lg p-2 mb-2 text-sm')}/>
                                <ErrorMessage name="email" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                            <div className='mb-2'>
                                <Field name="service" component="select"
                                       className={ClassNames(errors.service === 'Service is a required field' && touched.service === true ? 'border-2 border-red-500' : '', values.service === '' ? 'text-[#9BA3AF]' : 'text-black', 'w-full h-10 bg-[#F1F2F8] rounded-lg p-2 mb-2 text-sm')}>
                                    <option value="">Select A Service</option>
                                    <option value="Geriatric Care">Geriatric Care</option>
                                    <option value="Pediatric Therapy">Pediatric Therapy</option>
                                    <option value="Reiki">Reiki</option>
                                </Field>
                                <ErrorMessage name="service" component="div" className='w-full text-xs text-red-500'/>
                            </div>
                            <div className='mb-2'>
                                <Field component='textarea' rows={4} name="message" id='message'
                                       placeholder='Your Message (Optional)'
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