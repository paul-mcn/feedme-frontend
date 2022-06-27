import React from 'react';
import PropTypes from 'prop-types';

export const WelcomeMessage = ({ message }) => {
    return (
        <div>
            <h1 className='font-bold text-2xl'>{message}</h1> 
        </div>
    )
};

WelcomeMessage.propTypes = {
    message: PropTypes.string
}

export default WelcomeMessage;
