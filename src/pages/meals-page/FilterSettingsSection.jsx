import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';
import './index.css'

const FilterSettingsSection = props => (
    <div>
        <h4 className='px-2 py-2 text-xs'>FILTERS</h4>
        <div className='filter-border-rows'>
            <FilterButton text='Price' />
            <FilterButton text='Category' />
            <FilterButton text='Rating' />
        </div>
    </div>
)

FilterSettingsSection.propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FilterSettingsSection