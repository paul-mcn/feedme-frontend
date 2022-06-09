import React from 'react'
import SuggestedMeals from './SuggestedMeals'
import MealSelectionTable from './MealSelectionTable'
import WelcomeMessage from './WelcomeMessage'

const Border = () => <div className='border-b-[1px] w-full border-gray-500 p-3 mb-6'></div>

const FeedmeApp = () => {

	const welcomeMessage = "Suggested Weekly Meals"

	return (
		<div className='w-11/12 mx-auto p-5'>
			<div className='flex flex-col gap-5 mt-10'>
				<WelcomeMessage message={welcomeMessage} />
				<SuggestedMeals />
			</div>
			<Border />
			<MealSelectionTable />
		</div>
	)
}

export default FeedmeApp