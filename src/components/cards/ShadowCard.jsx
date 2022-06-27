import React from 'react'
import PropTypes from 'prop-types'

const ShadowCard = props => {
    return (
        <div>
            {props.content}
        </div>
    )
}

ShadowCard.propTypes = {
    content: PropTypes.oneOfType(
        PropTypes.string,
        PropTypes.element
    )
}

export default ShadowCard
