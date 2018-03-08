import React from 'react';
import { PropTypes } from 'prop-types';

const TextInput = ({label, onChange, name, value, type, validate }) => {
    return (
        <div>
            <div className="text-container"><label htmlFor={name}>{label}</label><p className="error-text">{validate(value)}</p></div>
            <input className="input input-big" type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
};

TextInput.propTypes = {
    /* gets the correct label from parent component */
    label: PropTypes.string.isRequired,
    /* To render the changes inside input */
    onChange: PropTypes.func.isRequired,
    /*  */
    name: PropTypes.string.isRequired,
    /* The value inside the input */
    value: PropTypes.string.isRequired,
    /* type of input */
    type: PropTypes.string,
    /* The text to display error message */
    validate: PropTypes.func
};

TextInput.defaultProps = {
    type: 'text',
    validate: () => ''
};

export default TextInput;