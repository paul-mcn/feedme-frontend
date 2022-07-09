import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../misc/Tooltip';
import GhostButton from '../buttons/GhostButton';

const DefaultForm = ({ className, fields, onSubmit }) => {
    const fieldSet = fields.map(({ label, toolTip, input }, idx) => (
        <div key={idx}>
            <div className={`flex ' + ${label ? '' : 'justify-end pr-2'} `}>
                {label && <label className='pl-4 flex-1' htmlFor="test">{label}</label>}
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

DefaultForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string ,
        toolTip: PropTypes.string,
        input: PropTypes.element
    })).isRequired,
    onSubmit: PropTypes.func,
    className: PropTypes.string,
}

export default DefaultForm