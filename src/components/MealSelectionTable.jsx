import React from 'react'
import GhostButton from './buttons/GhostButton'
import GhostInput from './inputs/GhostInput'
import MealsList from './misc/MealsList'
import AddMealWindow from './AddMealWindow'
// import EditMealWindow from './EditMealWindow'
import RemoveMealWindow from './RemoveMealWindow'
import NavigationButton from './buttons/NavigationButton'
import { useState } from 'react'
import H2 from './headings/H2'


const MealSelectionTable = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [toggleAddMeal, setToggleAddMeal] = useState(false);
    const [toggleRemoveMeal, setToggleRemoveMeal] = useState(false);

    const handleSetSearchTerm = (event) => setSearchTerm(event.target.value);

    const handleToggleAddMeal = () => {
        setToggleAddMeal(prevState => !prevState);
        setToggleRemoveMeal(false);
    }
    const handleToggleRemoveMeal = () => {
        setToggleAddMeal(false);
        setToggleRemoveMeal(prevState => !prevState);
    }

    return (
        <div className='flex flex-col gap-4 justify-center'>
            <div className='flex gap-2 items-center'>
                <H2 text='Quick Search' />
                <NavigationButton to='/meals' text='More' />
            </div>
            <div className='flex gap-3 items-center'>
                <GhostInput
                    onInput={handleSetSearchTerm}
                    placeholder='Search'
                />
                <NavigationButton to='/meals/create-meal' text='Add Meal' />
                <NavigationButton to='/meals/delete-meal' text='Delete Meal' />
            </div>
            {toggleAddMeal ? <AddMealWindow /> : null}
            {toggleRemoveMeal ? <RemoveMealWindow /> : null}
            <div className='flex-1'>
                <MealsList searchTerm={searchTerm} />
            </div>
        </div>
    )
}

export default MealSelectionTable
