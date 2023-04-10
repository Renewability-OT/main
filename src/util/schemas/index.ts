import * as yup from 'yup'

export const contactSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Email is a required field"),
    message: yup.string(),
})