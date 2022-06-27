import React from 'react';
import PropTypes from 'prop-types';

const H3 = props => (
    <div className={props.className}>
        <h3 className='font-bold text-xl select-none'>{props.text}</h3>
    </div>
)

H3.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default H3