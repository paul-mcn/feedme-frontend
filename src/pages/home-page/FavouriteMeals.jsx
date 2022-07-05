import React from 'react';
import ListItems from '../../components/misc/ListItems';
import H2 from '../../components/headings/H2';
import { Query } from '@apollo/react-components';
import LoadingMessage from '../../components/loading/LoadingMessage';
import ErrorMessage from '../../components/error/ErrorMessage';
import MealCard from '../../components/cards/MealCard';
import { FAVOURITE_MEALS_QUERY } from '../../services/withMealQuery';

const FavouriteMeals = props => (
    <Query query={FAVOURITE_MEALS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <LoadingMessage />
            
            if (error) return <ErrorMessage errorMessage={"Couldnt fetch data. Something went wrong, try again later."} />
            
            if (data) {
                const favMeals = data.favouriteMeals.map(meal => ({
                    key: meal.id,
                    item: <MealCard meal={meal} />
                }))
                return (
                    <div className='pb-10 '>
                        <H2 text={'Favourites'} className='mb-4' />
                        <ListItems className='flex gap-8 justify-start overflow-auto' items={favMeals} />
                    </div>
                )
            }
        }}
    </Query>
)

export default FavouriteMeals