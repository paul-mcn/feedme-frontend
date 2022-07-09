import React from 'react';
import FormInput from '../../components/inputs/FormInput';
import H2 from '../../components/headings/H2';
import DefaultForm from '../../components/forms/DefaultForm';

const LoginPage = props => {

    const fields = [
        {
            input: <FormInput type="email" label='Email' />,
            toolTip: "Your email address"
        }, {
            input: <FormInput type="password" label='Password' />,
            toolTip: "Your email address"
        },
    ]

    return (
        <div className='p-10'>
            {/* <form action="" >
                <fieldset className='flex flex-col gap-2'>
                    <FormInput type="email" placeholder="john.smith@email.com" />
                </fieldset>
            </form> */}
            <div className='md:w-1/2 xl:w-1/4 mx-auto flex flex-col gap-10'>
                <H2 text='Login' />
                <DefaultForm fields={fields} />
            </div>
        </div>
    )
}

export default LoginPage