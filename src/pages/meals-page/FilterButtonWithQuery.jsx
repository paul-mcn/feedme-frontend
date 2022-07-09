import React from 'react';
import PropTypes from 'prop-types';
import { Query } from '@apollo/client/react/components'
import FilterButton from './FilterButton';
import LoadingMessage from '../../components/loading/LoadingMessage';
import ErrorMessage from '../../components/error/ErrorMessage';

const FilterButtonWithQuery = props => {
    return (
        <FilterButton text={props.text}>
            <Query query={props.query} >
                {({ loading, error, data }) => {
                    if (loading) return <LoadingMessage />
                    if (error) return <ErrorMessage />
                    if (data) return props.children(data)
                }}
            </Query>
        </FilterButton>
    )
}

FilterButtonWithQuery.propTypes = {
    query: PropTypes.object.isRequired,
    children: PropTypes.func,
    text: PropTypes.string.isRequired
}

export default FilterButtonWithQuery
