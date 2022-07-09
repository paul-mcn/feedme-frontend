import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NavigationButton = ({ to, text, className }) => {
    const classNames = `${className} cursor-pointer rounded-full px-4 py-1 border-2 border-black hover:opacity-70 transition-colors duration-75`
    return (
        <a href={to} className='block group'>
            <div className={classNames}>
                <div className=' gap-1 items-center hidden md:flex'>
                    {text && <div className='font-bold text-lg'>{text}</div>}
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className="duration-[50ms] mr-1 ml-1 group-hover:mr-0 group-hover:ml-2"
                    />
                </div>
                <div className='flex gap-1 items-center md:hidden'>
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
