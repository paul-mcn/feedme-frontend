import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';
import FilterRadioInput from './FilterRadioInput';
import './index.css'

const FilterSettingsSection = props => {
    const ratingItem = (value) => `${value} and up ${Array(value).fill("").map(x => "⭐").join(' ')}`
    const ratingItems = [1, 2, 3, 4, 5].map(key => ({ key: `${key}`, item: ratingItem(key) }))
    return (
        <div>
            <h4 className='px-2 py-2 text-xs'>FILTERS</h4>
            <div className='filter-border-rows'>
                <FilterButton text='Price' />
                <FilterButton text='Category' />
                <FilterButton text='Rating'  >
                    <FilterRadioInput items={ratingItems} />
                </FilterButton>
            </div>
        </div>
    )
}

FilterSettingsSection.propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FilterSettingsSection