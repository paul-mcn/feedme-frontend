import React from 'react';
import PropTypes from 'prop-types'

const FilterCheckboxInput = props => {
    const inputs = props.items.map(({ key, item }, idx) => {
        return (
            <div key={idx} className='flex gap-1 cursor-pointer select-none'>
                <input type='checkbox' id={key} value={item} name={props.inputGroupName} />
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

FilterCheckboxInput.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        item: PropTypes.any
    }))
}

export default FilterCheckboxInput