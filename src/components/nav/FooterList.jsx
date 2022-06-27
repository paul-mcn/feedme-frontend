import React from 'react';
import PropTypes from 'prop-types'
import ListItems from '../misc/ListItems';
import { Link } from 'react-router-dom'

const FooterList = ({ heading, items }) => {
    const footerItems = items.map((item, idx) => {
        return {
            key: `${idx}`,
            item: (
                <Link
                    className='hover:opacity-60 transition-opacity duration-300'
                    to={item.to}>{item.text}
                </Link>
            )
        }
    })
    return (
        <div>
            <h4 className='font-bold text-md mb-2'>{heading}</h4>
            <ListItems className={"flex flex-col gap-2"} items={footerItems} />
        </div>
    )
}

FooterList.propTypes = {
    heading: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired
    }))
}

export default FooterList