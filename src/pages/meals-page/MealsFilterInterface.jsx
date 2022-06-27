import React from 'react';
import { Query } from '@apollo/client/react/components';
import { MEALS_QUERY } from '../../services/withMealQuery';
import LoadingMessage from '../../components/loading/LoadingMessage';
import ErrorMessage from '../../components/error/ErrorMessage';
import FilterSettingsSection from './FilterSettingsSection';
import MealsGridSection from './MealsGridSection';
import NavigationButton from '../../components/buttons/NavigationButton'

const MealsFilterInterface = props => (
    <Query query={MEALS_QUERY}>
        {({ loading, error, data }) => {

            if (loading) return <LoadingMessage />

            if (error) return <ErrorMessage errorMessage={error} />

            if (data) {
                return (
                    <div className='grid grid-cols-4 gap-10 content-center'>
                        <div className='row-span-2 mt-10'>
                            <FilterSettingsSection  meals={data.meals} />
                        </div>
                        <div className='col-span-3 flex'>
                            <div className="flex-1 flex">
                                <NavigationButton text='Add Meal' to='/meals/create-meal' className="bg-green-400 hover:bg-green-400" />
                            </div>
                            <div className='float-right p-4'>Sort By Relevance</div>
                        </div>
                        <MealsGridSection meals={data.meals} />
                    </div>
                )
            }
        }}
    </Query>
)

export default MealsFilterInterface