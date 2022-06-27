import React from "react";
import PropTypes from 'prop-types'

// interface extends
const FormInput = () => {
    return (
        <input type="text" />
    )
}

FormInput.defaultProps = {
    type: 'text'
}

FormInput.propTypes = {
    type: PropTypes.string
}

export default FormInput