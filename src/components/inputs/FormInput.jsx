import React from "react";
import PropTypes from 'prop-types'
import './index.css'

// interface extends
const FormInput = (props) => {

    return (
        <div className='input__container'>
            <input
                placeholder=" "
                className={`input__self`}
                type={props.type}
                value={props.value}
                min={props.min}
                max={props.max}
                step={props.step}
                onInput={props.onInput}
                pattern={props.pattern}
                required={props.required}
            />
            <label className='input__label' htmlFor="email" >{props.label}</label>
        </div>
    )
}

FormInput.defaultProps = {
    type: 'text'
}

FormInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    required: PropTypes.bool,
    pattern: PropTypes.string,
    onInput: PropTypes.func
}

export default FormInput