import React from 'react';
import PropTypes from 'prop-types';
import GhostButton from '../../components/buttons/GhostButton'
import Tooltip from '../../components/misc/Tooltip';

const AddMealForm = ({ className, fields, onSubmit }) => {
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
            <form action="" onSubmit={onSubmit}>
                <div className='flex flex-col gap-5'>
                    {fieldSet}
                </div>
                <GhostButton className='mt-10 w-full' type='submit' text='Add Meal' />
            </form>
        </div>
    )
}

AddMealForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
}

export default AddMealForm