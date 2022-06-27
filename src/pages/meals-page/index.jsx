import React from 'react';
import DefaultLayout from '../../components/page-templates/DefaultLayout';
import MealsFilterInterface from './MealsFilterInterface';

const MealsPage = props => {
    return (
        <DefaultLayout welcomeMessage={"Meals"}>
            <MealsFilterInterface />
        </DefaultLayout>
    )
}

export default MealsPage