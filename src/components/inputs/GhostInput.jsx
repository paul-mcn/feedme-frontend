import React from 'react'
import PropTypes from 'prop-types'

const GhostInput = (props) => {
    return (
        <div
            className={`${props.className} transition-colors h-10 duration-250 hover:bg-gray-200 border-2 border-black rounded-full overflow-hidden`}>
            <input
                placeholder={props.placeholder}
                value={props.value}
                className='font-bold px-4 flex leading-9 outline-0 w-full'
                onInput={props.onInput}
                pattern={props.pattern}
                type={props.type}
                max={props.max}
                min={props.min}
                step={props.step}
                required={props.required}
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
    pattern: PropTypes.string,
    type: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    required: PropTypes.bool,
    className: PropTypes.string
}

export default GhostInput
