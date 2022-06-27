import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ListItems from '../../components/misc/ListItems'

const FilterButton = ({ text }) => {

    const [openDropdown, setOpenDropdown] = useState(false);

    const handleopenDropdown = () => setOpenDropdown(!openDropdown)

    return (
        <div className='w-full group'>
            <button className='hover:bg-gray-100/50 duration-300 w-full flex items-center px-2 py-4'
                onClick={handleopenDropdown}>
                <p className='flex-1 text-left'>{text}</p>
                <FontAwesomeIcon icon={faPlus} className={openDropdown ? 'hidden' : ''} />
                <FontAwesomeIcon icon={faMinus} className={openDropdown ? '' : 'hidden'} />
            </button>
            <ListItems className={`${openDropdown ? '': 'h-0'} overflow-hidden`} items={[]} />
        </div>
    )
}

FilterButton.propTypes = {
    text: PropTypes.string.isRequired
}

export default FilterButton