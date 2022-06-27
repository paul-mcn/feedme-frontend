import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarsInput from './StarsInput';

const StarsHoverInput = props => {

    const [mouseX, setMouseX] = useState(5)
    const [count, setCount] = useState(5)

    const handleMouseMove = ({ pageX, target }) => {
        const mousePosX = pageX
        const { offsetLeft, offsetWidth } = target;

        const value = (mousePosX - offsetLeft) / offsetWidth * 5;
        setMouseX(mousePosX - offsetLeft)
        setCount(value)
    }

    return (
        <div onMouseMove={handleMouseMove} className='w-min cursor-pointer' >
            <label htmlFor="">{count.toFixed(1)} out of 5.0</label>
            <StarsInput bar={mouseX} className="text-4xl" />
        </div>
    )
}

StarsHoverInput.propTypes = {

}

export default StarsHoverInput