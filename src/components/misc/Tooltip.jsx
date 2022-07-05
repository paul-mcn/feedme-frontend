import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const Tooltip = ({ text }) => {
    return (
        <div className='cursor-pointer group relative'>
            <FontAwesomeIcon icon={faCircleQuestion} className='text-gray-700' />
            <div className='hidden group-hover:block absolute w-32 -top-1 left-8 bg-white drop-shadow-lg rounded-lg p-2'>
                <div className='absolute -left-2 bg-white w-4 h-4 rounded-lg'></div>
                <p className='text-sm'>
                    {text}
                </p>
            </div>
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