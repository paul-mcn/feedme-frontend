import React from 'react'
import PropTypes from 'prop-types'

const TableItems = props => {

    return (
        <div className={`grid gap-4 ${props.className}`} >
            {props.items.map(({key, item}) => <div key={key}>{item}</div>)}
        </div>
    )
}

TableItems.propTypes = {
    headings: PropTypes.array,
    items: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        item: PropTypes.any
    })),
    className: PropTypes.string
}

TableItems.defaultProps = {
    columns: "4",
    gap: "1"
}

export default TableItems
