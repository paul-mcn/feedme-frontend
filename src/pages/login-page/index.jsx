import React from 'react';
import FormInput from '../../components/inputs/FormInput';
import H2 from '../../components/headings/H2';
import DefaultForm from '../../components/forms/DefaultForm';
import { Link } from 'react-router-dom';

const LoginPage = props => {

    const fields = [
        {
            input: <FormInput type="email" label='Email' />,
            toolTip: "Your email address"
        }, {
            input: <FormInput type="password" label='Password' />,
            toolTip: "Your password"
        },
    ]

    const handleSubmit = (e) => { e.preventDefault() }

    return (
        <div className='p-10'>
            <div className='md:w-1/2 xl:w-1/4 mx-auto my-10 flex flex-col gap-2'>
                <H2 text='Login' />
                <p>Don't have an account? <Link className='text-blue-700' to={'/signup'}>Signup here</Link></p>
                <DefaultForm fields={fields} submitText={'Login'} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default LoginPage