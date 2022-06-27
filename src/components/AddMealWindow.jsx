import React from 'react';
import Tooltip from './misc/Tooltip';
import FormInput from './inputs/FormInput';

const AddMealWindow = () => {
    const locationTooltip = "Where is the meal located? e.g. website or book and page"
    const photoUrlTooltip = "the URL of the photo e.g. https://website.com/mycoolphoto.jpg";
    return (
        <div>
            <h2>Meal Name</h2>
            <FormInput type="text" />
            <div>
                <h2>location</h2>
                <Tooltip text={locationTooltip} />
            </div>
            <FormInput type="text" name="" id="" />
            <h2>description</h2>
            <FormInput type="text" name="" id="" />
            <div>
                <h2>photoUrl</h2>
                <Tooltip text={photoUrlTooltip} />
            </div>
        </div>
    )
}

export default AddMealWindow