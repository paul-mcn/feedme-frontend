import React from 'react'
import PropTypes from 'prop-types'

const ListItems = props => {
    return (
        <ul className={props.classNames} >
            {props.items.map(({key, item}) => <li className='flex-1' key={key}>{item}</li>)}
        </ul>
    )
}

ListItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        item: PropTypes.any
    })),
    classNames: PropTypes.string
}

export default ListItems
