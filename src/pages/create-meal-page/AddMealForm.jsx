import React from 'react';
import PropTypes from 'prop-types';
import GhostInput from '../../components/inputs/GhostInput';
import GhostButton from '../../components/buttons/GhostButton'
import Tooltip from '../../components/misc/Tooltip';
import StarsHoverInput from '../../components/inputs/StarsHoverInput';

const AddMealForm = ({ className }) => {

    const fields = [
        {
            label: "Meal Name",
            toolTip: "Name of the meal",
            input: <GhostInput placeholder='Bolognese' />
        },
        {
            label: "Location",
            toolTip: "Where the recipe is located. E.g. The Chefs Companion, pg 15",
            input: <GhostInput placeholder='Beginners Cook Book' />
        },
        {
            label: "Description",
            toolTip: "A couple sentences describing the meal",
            input: <GhostInput placeholder='Quo distinctio voluptatem qui recusandae deserunt dolores occaecati dolorem ratione. Quaerat aut fuga officia officiis id est natus. Nam officiis reprehenderit aspernatur officia nihil placeat ut. Quis repellat suscipit.' />
        },
        {
            label: "Rating",
            toolTip: "out of 5",
            input: <StarsHoverInput />
        },
        {
            label: "Photo",
            toolTip: "Upload photo from url",
            input: <GhostInput placeholder='https://google.com/image/123.jpg'/>
        }
    ]

    const fieldSet = fields.map(({ label, toolTip, input }, idx) => (
        <div className='' key={idx}>
            <div className='flex'>
                <label className='pl-4 flex-1' htmlFor="test">{label}</label>
                {toolTip && <Tooltip text={toolTip} />}
            </div>
            {input}
        </div>
    ))

    return (
        <div className={className}>
            <form action="">
                <div className='flex flex-col gap-5'>
                    {fieldSet}
                </div>
                <GhostButton className='mt-10 w-full' type={'submit'} text='Add Meal' />
            </form>
        </div>
    )
}

AddMealForm.propTypes = {
    className: PropTypes.string
}

export default AddMealForm