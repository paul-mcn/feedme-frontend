import React from 'react'
import PropTypes from 'prop-types'

const ListItems = props => {
    if (props.items.length > 0) {
        return (
            <ul className={props.className} >
                {props.items.map(({ key, item }) => <li key={key}>{item}</li>)}
            </ul>
        )
    } else {
        return (
            <ul className={props.className}>
                <li>Nothing found</li>
            </ul>
        )
    }
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        item: PropTypes.any
    })),
    className: PropTypes.string
}

export default ListItems
