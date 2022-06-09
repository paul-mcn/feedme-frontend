import React from 'react'
import PropTypes from 'prop-types'

const Tooltip = ({ text }) => {
    return (
        <div>
            {text}
        </div>
    )
}

Tooltip.defaultProps = {
    text: 'Default Text'
}

Tooltip.propTypes = {
    text: PropTypes.string
}

export default Tooltip