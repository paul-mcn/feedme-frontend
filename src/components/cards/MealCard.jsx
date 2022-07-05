import React from 'react';
import PropTypes from 'prop-types';
import StarsInput from '../inputs/StarsInput';

const MealCard = props => {
    return (
        <div className='hover:opacity-80 transition-opacity ease-in-out duration-300 cursor-pointer w-48'>
            <div className='flex flex-col gap-1 grow-0 space-evenly p-1 '>
                <div className='w-full rounded-xl h-[20vh]' style={{ background: `url(${props.meal.photoUrl}) center/cover no-repeat` }}></div>
                <h2 className='font-bold'>{props.day}</h2>
                <h3 className='text-sm'>{props.meal.name} <span>●</span> {props.meal.location}</h3>
                <h3><StarsInput count={props.meal.rating} /></h3>
                <p className='text-sm h-10 truncate'>{props.meal.description}</p>
            </div>
        </div>
    )
}

MealCard.propTypes = {
    meal: PropTypes.object.isRequired
}

export default MealCard;