import React from 'react';
import PropTypes from 'prop-types';

const DefaultForm = props => {
    return (
        <form action="">
            <div>
                <fieldset>
                    
                </fieldset>
            </div>
        </form>
    )
}

DefaultForm.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DefaultForm