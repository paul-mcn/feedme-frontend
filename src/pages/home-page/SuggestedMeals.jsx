import React from 'react'
import SuggestedMeal from './SuggestedMeal'
import TableItems from '../../components/misc/TableItems';
import LoadingMessage from '../../components/loading/LoadingMessage';
import ErrorMessage from '../../components/error/ErrorMessage';
import { Query } from '@apollo/client/react/components';
import { SUGGESTED_MEALS_QUERY } from '../../services/withMealQuery';

const SuggestedMeals = () => (

    <Query query={SUGGESTED_MEALS_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <LoadingMessage />

            if (error) return <ErrorMessage errorMessage={error} />

            if (data) {
                const { suggestedMeals } = data;
                if (!suggestedMeals) return <div>No meals found. Add meals to get started!</div>;
                const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
                const items = days.map((day, i) => {
                    return {
                        key: suggestedMeals[i].id,
                        item: <SuggestedMeal
                            meal={suggestedMeals[i]}
                            day={day}
                        />
                    }
                })
                return <TableItems items={items} gap='2' />
            }

            return (
                <TableItems items={[]} columns="4" gap="2" />
            )
        }}
    </Query>
)

export default SuggestedMeals
