import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NavigationButton = ({ to, text, className }) => {
    const classNames = `${className} h-full cursor-pointer rounded-full border-2 border-black px-4 py-1 hover:bg-gray-100 transition-colors duration-300`
    return (
        <a href={to} className='inline-block group h-full'>
            <div className={classNames}>
                <div className=' gap-1 items-center group-hover:mr-0 mr-1 duration-75 h-full hidden md:flex'>
                    {text && <div className='font-bold text-lg'>{text}</div>}
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="group-hover:ml-1 transition-all duration-75"
                    />
                </div>
                <div className='flex gap-1 items-center group-hover:mr-0 mr-1 duration-75 h-full md:hidden'>
                    {text && <div className='font-bold text-lg'>{text.split(" ")[0]}</div>}
                </div>
            </div>
        </a>
    )
}

NavigationButton.propTypes = {
    to: PropTypes.string.isRequired,
    text: PropTypes.string,
    className: PropTypes.string
}

export default NavigationButton
