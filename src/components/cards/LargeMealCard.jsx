import React from 'react';
import PropTypes from 'prop-types';
import StarsInput from '../inputs/StarsInput';

const MealCard = props => {
    const backgupImgUrl = "https://windsorparkstud.co.nz/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
    const imageStyle = { background: `url(${props.meal.photoUrl || backgupImgUrl}) center/cover no-repeat` }
    return (
        <div className='hover:opacity-80 transition-opacity ease-in-out duration-300 cursor-pointer w-96'>
            <div className='flex flex-col gap-1 grow-0 space-evenly p-1'>
                <div className='w-full rounded-xl h-96' style={imageStyle}></div>
                <h2 className='font-bold'>{props.day}</h2>
                <h3 className='text-xl'>
                    {props.meal.name || <span className='text-gray-400'>Meal Name</span>}
                    <span> ● </span>
                    {props.meal.location || <span className='text-gray-400'>Location</span>}
                </h3>
                <h3><StarsInput className='text-xl' count={`${props.meal.rating}`} /></h3>
                <p className='text-md h-10 truncate'>
                    {props.meal.description || <span className='text-gray-400'>Brief description</span>}
                </p>
            </div>
        </div>
    )
}

MealCard.propTypes = {
    meal: PropTypes.object.isRequired
}

export default MealCard;