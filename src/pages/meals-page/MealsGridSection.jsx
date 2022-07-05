import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/cards/MealCard'

const MealsGridSection = props => {
    const meals = props.meals.map(meal => <Card key={meal.id} meal={meal} />)
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {meals}
            </div>
        </>
    )
}


MealsGridSection.propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MealsGridSection