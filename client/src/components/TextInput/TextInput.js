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
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    validate: PropTypes.func
};

TextInput.defaultProps = {
    type: 'text',
    validate: () => ''
};

export default TextInput;