import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton';
import FilterRadioInput from './FilterRadioInput';
import FilterCheckboxInput from './FilterCheckboxInput';
import './index.css'
import { MEALS_QUERY, MEAL_TAGS_QUERY } from '../../services/withMealQuery'
import { Query } from '@apollo/client/react/components';
import FilterButtonWithQuery from './FilterButtonWithQuery';

const FilterSettingsSection = props => {
    const ratingItem = (value) => `${value} and up ${Array(value).fill("").map(x => "⭐").join(' ')}`
    const ratingItems = [1, 2, 3, 4].map(key => ({ key: `${key}`, item: ratingItem(key) }))
    return (
        <div>
            <h4 className='px-2 py-2 text-xs'>FILTERS</h4>
            <div className='filter-border-rows'>
                <FilterButtonWithQuery text="Books" query={MEALS_QUERY}>
                    {(data) => {
                        const items = data.meals.map(meal => (
                            // TODO: Turn location into two separate fields, book and author
                            { key: meal.id, item: meal.location.split('pg')[0] })
                        );
                        return <FilterCheckboxInput items={items} />
                    }}
                </FilterButtonWithQuery>
                <FilterButtonWithQuery text="Category" query={MEAL_TAGS_QUERY}>
                    {(data) => {
                        const items = data.mealtags.map(tag => ({ key: tag.id, item: tag.name }));
                        return <FilterCheckboxInput items={items} />
                    }}
                </FilterButtonWithQuery>
                <FilterButton text='Rating'  >
                    <FilterRadioInput items={ratingItems} />
                </FilterButton>
            </div>
        </div >
    )
}

FilterSettingsSection.propTypes = {
    meals: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FilterSettingsSection