import React from 'react'
import PropTypes from 'prop-types'

const ResponsiveImage = props => {
    return (
        <div
            className={`w-full ${props.className}`}
            style={{ background: `url(${props.url}) center/cover no-repeat` }}>
        </div>
    )
}

ResponsiveImage.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default ResponsiveImage
