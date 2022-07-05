import React from 'react'
import SuggestedMeals from './SuggestedMeals'
import MealSelectionTable from '../../components/MealSelectionTable'
import FavouriteMeals from './FavouriteMeals'
import SignupMessage from './SignupMessage'
import DefaultLayout from '../../components/page-templates/DefaultLayout'

const Border = () => <div className='border-b-[1px] w-full border-gray-500 p-3 mb-6'></div>

const OrganiseMyMealsApp = () => {

	const welcomeMessage = "Suggested Weekly Meals"

	return (
		<div>
			<DefaultLayout welcomeMessage={welcomeMessage}>
				<SuggestedMeals />
				<Border />
				<MealSelectionTable />
				<Border />
				<FavouriteMeals />
			</DefaultLayout>
			<SignupMessage />
		</div>
	)
}

export default OrganiseMyMealsApp