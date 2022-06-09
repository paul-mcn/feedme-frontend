import React from 'react'
import PropTypes from 'prop-types'

const GhostInput = props => {
    return (
        <div className='transition-colors duration-250 hover:bg-gray-200 border-2 border-black rounded-full overflow-hidden'>
            <input
                placeholder={props.placeholder}
                value={props.value}
                className='font-bold px-4 py-2 outline-0' 
                onInput={props.onInput}
                pattern={props.pattern}
            />
        </div>
    )
}

GhostInput.defaultProps = {
    placeholder: "",
}

GhostInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onInput: PropTypes.func,
    pattern: PropTypes.string
}

export default GhostInput
