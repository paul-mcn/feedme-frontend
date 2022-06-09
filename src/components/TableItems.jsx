import React from 'react'
import PropTypes from 'prop-types'

const TableItems = props => {
    const style = {
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
        gap: `${props.gap}rem`
    }

    return (
        <div className={`grid gap-4`} style={style}>
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
    columns: PropTypes.string,
    gap: PropTypes.string
}

TableItems.defaultProps = {
    columns: "4",
    gap: "1"
}

export default TableItems
