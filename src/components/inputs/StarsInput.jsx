import React from 'react';
import PropTypes from 'prop-types';

const StarsInput = (props) => {
    const starWidth = props.count ? `${Math.round(props.count / 5 * 100)}%` : `${props.bar}px`

    const starStyles = { gridArea: "1 / 1 / 2 / 2" }
    const styles = { width: starWidth, ...starStyles }

    return (
        <div className='w-min grid'>
            <div className='z-10' style={styles}>
                <div className={`${props.className} overflow-hidden`}>
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
            <div className={`${props.className} saturate-0`} style={starStyles}>
                ⭐⭐⭐⭐⭐
            </div>
        </div>
    )
}

StarsInput.propTypes = {
    count: PropTypes.string,
    bar: PropTypes.number,
    className: PropTypes.string
}

export default StarsInput;