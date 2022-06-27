import React from 'react';
import ListItems from './ListItems'
import ResponsiveImage from '../ResponsiveImage'
import { removeSpecialCharactersFromString } from '../../util/format-input'
import { filterObjectArrayWithStringMatch } from '../../util/list-util'
import { useQuery, gql } from "@apollo/client";

const formatMeals = (meals) =>
    meals.map(meal => {
        return {
            key: meal.id,
            item: (
                <div className='flex gap-2 hover:bg-gray-100 p-2 rounded-xl cursor-pointer h-32 overflow-hidden'>
                    <div className='w-32 flex-none'>
                        <ResponsiveImage className='h-full rounded-xl' url={meal.photoUrl} />
                    </div>
                    <div className='flex-1'>
                        <h4 className='font-bold'>{meal.name}</h4>
                        <p className='text-xs'>{meal.location}</p>
                        <p>{meal.description}</p>
                    </div>
                </div>
            )
        }
    })


const filteredMeals = (meals, searchTerm) => {
    let regex = null;
    try {
        const text = removeSpecialCharactersFromString(searchTerm)
        regex = new RegExp(`${text}`, 'gi')
    } catch (error) {
        console.log(error);
    }
    const filterMeals = filterObjectArrayWithStringMatch(meals, 'name', regex);
    return formatMeals(filterMeals);
}

const Meals = (props) => {
    const MEAL_QUERY = gql`{ 
		meals {
			id
            name
            location
            description
            photoUrl
		}
	}`

    const { loading, error, data } = useQuery(MEAL_QUERY);

    if (loading) return <div>Loading...</div>

    if (error) return <div>Error: Could not load data</div>

    if (data) {
        const items = filteredMeals(data.meals, props.searchTerm);
        return <ListItems className='h-96 overflow-y-auto p-1' items={items} />
    }
}

const MealsList = ({ searchTerm }) => {
    return <Meals searchTerm={searchTerm} />
}

export default MealsList;