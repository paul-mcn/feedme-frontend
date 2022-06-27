import React from 'react';
import AddMealForm from './AddMealForm';
import DefaultLayout from '../../components/page-templates/DefaultLayout';

const CreateMealPage = props => {
    return (
        <DefaultLayout welcomeMessage={"Add Meal"}>
            <div className=''>

            </div>
            <AddMealForm className='w-1/4 pb-10' />
        </DefaultLayout>
    )
}

export default CreateMealPage