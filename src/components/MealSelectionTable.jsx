import React from 'react'
import GhostButton from './GhostButton'
import GhostInput from './GhostInput'
import MealsList from './MealsList'
import AddMealWindow from './AddMealWindow'
import EditMealWindow from './EditMealWindow'
import RemoveMealWindow from './RemoveMealWindow'
import { useState } from 'react'


const MealSelectionTable = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [toggleAddMeal, setToggleAddMeal] = useState(false);
    const [toggleEditMeal, setToggleEditMeal] = useState(false);
    const [toggleRemoveMeal, setToggleRemoveMeal] = useState(false);

    const handleSetSearchTerm = (event) => setSearchTerm(event.target.value);

    const handleToggleAddMeal = () => {
        setToggleAddMeal(prevState => !prevState);
        setToggleEditMeal(false);
        setToggleRemoveMeal(false);
    }
    const handleToggleEditMeal = () => {
        setToggleAddMeal(false);
        setToggleEditMeal(prevState => !prevState);
        setToggleRemoveMeal(false);
    }
    const handleToggleRemoveMeal = () => {
        setToggleAddMeal(false);
        setToggleEditMeal(false);
        setToggleRemoveMeal(prevState => !prevState);
    }

    return (
        <div className='flex flex-col gap-4 justify-center'>
            <h2 className='font-bold text-xl'>Meal Selection</h2>
            <div className='flex gap-3'>
                <GhostInput
                    onInput={handleSetSearchTerm}
                    placeholder='Search'
                />
                <GhostButton text='Add Meal' onClick={handleToggleAddMeal} />
                <GhostButton text='Edit Meal' onClick={handleToggleEditMeal} />
                <GhostButton text='Remove Meal' onClick={handleToggleRemoveMeal} />
            </div>
            {toggleAddMeal ? <AddMealWindow /> : null}
            {toggleEditMeal ? <EditMealWindow /> : null}
            {toggleRemoveMeal ? <RemoveMealWindow /> : null}
            <div className='flex gap-2'>
                <MealsList searchTerm={searchTerm} />
                <div>
                    Panel of something
                </div>
            </div>
        </div>
    )
}

export default MealSelectionTable
