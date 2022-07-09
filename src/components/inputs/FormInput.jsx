import React from "react";
import PropTypes from 'prop-types'
import './index.css'

// interface extends
const FormInput = (props) => {

    return (
        <div className='input__container'>
            <input
                className={`input__self`}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
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
    placeholder: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string
}

export default FormInput