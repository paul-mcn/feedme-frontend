import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({errorMessage}) => {
    return <div>{errorMessage}</div>
}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string.isRequired
}

export default ErrorMessage