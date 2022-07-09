import React from 'react';
import PropTypes from 'prop-types';
import WelcomeMessage from '../headings/WelcomeMessage';

const DefaultLayout = ({ welcomeMessage, children }) => {
    return (
        <div className='w-11/12 mx-auto px-5 pt-5'>
            <div className='mt-10 mb-5'>
                <WelcomeMessage message={welcomeMessage} />
            </div>
            {children}
        </div>
    )
}

DefaultLayout.propTypes = {
    welcomeMessage: PropTypes.string
}

DefaultLayout.defaultProps = {
    welcomeMessage: ''
}


export default DefaultLayout