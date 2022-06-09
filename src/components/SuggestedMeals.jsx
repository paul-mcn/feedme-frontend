import React from 'react'
import ListItems from './ListItems'
import SuggestedMeal from './SuggestedMeal'
import TableItems from './TableItems';
import { gql, useQuery } from '@apollo/client';

const SuggestedMeals = () => {
    const MEAL_QUERY = gql`{ 
        suggestedMeals(id:1) {
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
        const { suggestedMeals } = data;
        if (!suggestedMeals) return <div>No Suggested Meals</div>;
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        const items = []
        for (let i = 0; i < days.length; i++) {
            items.push({
                key: suggestedMeals[i].id,
                item: <SuggestedMeal
                    meal={suggestedMeals[i]}
                    day={days[i]}
                />
            })
        }
        return <TableItems items={items} gap='2' />
    }

    return (
        <TableItems items={[]} columns="4" gap="2" />
    )
}

export default SuggestedMeals
