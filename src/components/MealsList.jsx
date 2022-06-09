import React from 'react';
import ListItems from './ListItems'
import ResponsiveImage from './ResponsiveImage'
import { removeSpecialCharactersFromString } from '../util/format-input'
import { filterObjectArrayWithStringMatch } from '../util/list-util'
import { useQuery, gql } from "@apollo/client";

const formatMeals = (meals) =>
    meals.map(meal => {
        return {
            key: meal.id,
            item: <div className='flex gap-2 hover:bg-gray-100 p-2 rounded-xl cursor-pointer'>
                <ResponsiveImage className='w-16 rounded-xl' url={meal.photoUrl} />
                <div>
                    <h4 className='font-bold'>{meal.name}</h4>
                    <p className='text-xs'>{meal.location}</p>
                    <p>{meal.description}</p>
                </div>
            </div>
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

    if (data) {
        return <ListItems classNames='' items={filteredMeals(data.meals, props.searchTerm)} />
    }
}

const MealsList = ({searchTerm}) => {
    return <Meals searchTerm={searchTerm} />
}

export default MealsList;