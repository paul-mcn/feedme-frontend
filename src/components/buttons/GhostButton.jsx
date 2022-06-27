import React from 'react'
import PropTypes from 'prop-types'

const GhostButton = props => {
    return (
        <div className=''>
            <button
                className={`${props.className} transition-colors duration-250 hover:bg-gray-200 border-2 border-black rounded-full`} type={props.type}
            >
                <div className='font-bold px-4 py-2'>
                    {props.text}
                </div>
            </button>
        </div>
    )
}

GhostButton.defaultProps = {
    text: "Click me",
}

GhostButton.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string
}

export default GhostButton
