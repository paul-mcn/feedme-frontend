import React from 'react';
import PropTypes from 'prop-types';

const HeaderText = ({ text }) => {
    return <div className="text-white text-xl">{text}</div>
}

HeaderText.propTypes = {
    text: PropTypes.string.isRequired
}

export default HeaderText