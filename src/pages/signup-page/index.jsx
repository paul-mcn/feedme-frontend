import React from 'react'
import DefaultForm from "../../components/forms/DefaultForm";
import FormInput from '../../components/inputs/FormInput';
import H2 from '../../components/headings/H2';
import { Link } from 'react-router-dom'

const SignUpPage = (props) => {

    const fields = [
        {
            input: <FormInput type="text" label='Name' />,
            toolTip: "Your full name e.g. John Smith"
        }, {
            input: <FormInput type="email" label='Email' />,
            toolTip: "Your email address"
        }, {
            input: <FormInput type="password" label='Password' min={3} />,
            toolTip: "Password must have a min of 3 characters"
        }, {
            input: <FormInput type="password" label='Confirm Password' min={3} />,
            toolTip: "Both passwords must match"
        },
    ]

    const handleSubmit = (e) => { e.preventDefault() }

    return (
        <div className='p-10'>
            <div className='md:w-1/2 xl:w-1/4 mx-auto my-10 flex flex-col gap-2'>
                <H2 text='Signup' />
                <p>Already have an account? <Link className='text-blue-700' to={'/login'}>Login here</Link></p>
                <DefaultForm fields={fields} submitText={'Sign up'} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default SignUpPage