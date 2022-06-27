import React from 'react'
import PropTypes from 'prop-types'

const H2 = props => (
    <div className={props.className}>
        <h2 className='font-bold text-2xl select-none'>{props.text}</h2>
    </div>
)

H2.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default H2