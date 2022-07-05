import React from 'react';
import PropTypes from 'prop-types';

const FilterRadioInput = (props) => {
    const inputs = props.items.map(({ key, item }, idx) => {
        return (
            <div key={idx} className='flex gap-1 cursor-pointer'>
                <input type='radio' id={key} value={item} name={props.inputGroupName} />
                <label htmlFor={key}>{item}</label>
            </div>
        )
    })

    return (
        <fieldset className='w-full flex flex-col' name="" id="" >
            {inputs}
        </fieldset>
    )
}

FilterRadioInput.propTypes = {
    items: PropTypes.array.isRequired,
    inputGroupName: PropTypes.string,
    value: PropTypes.string
}

FilterRadioInput.defaultProps = {
    inputGroupName: 'group'
}

export default FilterRadioInput;