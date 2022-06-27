import React from 'react'
import PropTypes from 'prop-types'
import StarsInput from '../../components/inputs/StarsInput'

const SuggestedMeal = props => {
    return (
        <div className=''>
            <div className='flex flex-col gap-1 space-evenly hover:opacity-80 transition-opacity ease-in-out duration-300 cursor-pointer'>
                <h2 className='font-bold'>{props.day}</h2>
                <h3 className='text-sm'>{props.meal.name} <span>●</span> {props.meal.location}</h3>
                <h3><StarsInput count={props.meal.rating} /></h3>
                <p className='text-sm h-10'>{props.meal.description}</p>
                <div className='w-full rounded-xl h-40' style={{ background: `url(${props.meal.photoUrl}) center/cover no-repeat` }}></div>
            </div>
        </div>
    )
}

SuggestedMeal.propTypes = {
    day: PropTypes.string.isRequired,
    meal: PropTypes.object.isRequired
}

export default SuggestedMeal
