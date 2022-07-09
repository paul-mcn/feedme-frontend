import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ListItems from '../../components/misc/ListItems'

const FilterButton = ({ text, items, children }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const handleOpenDropdown = () => setOpenDropdown(!openDropdown)

    return (
        <div className='w-full group'>
            <button className='hover:bg-gray-100/50 duration-300 w-full flex items-center px-2 py-4'
                onClick={handleOpenDropdown}>
                <p className='flex-1 text-left'>{text}</p>
                <FontAwesomeIcon icon={faPlus} className={openDropdown ? 'hidden' : ''} />
                <FontAwesomeIcon icon={faMinus} className={openDropdown ? '' : 'hidden'} />
            </button>
            <div
                className={`${openDropdown ? 'h-full' : 'h-0 py-0'} overflow-hidden px-4 py-2`}
            >
                {children}
            </div>
        </div>
    )
}

FilterButton.propTypes = {
    text: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

FilterButton.defaultProps = {
    items: []
}

export default FilterButton