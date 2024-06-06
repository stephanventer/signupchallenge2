import React from 'react';

const TextInput = ({ label, type, name, value, onChange }) => (
    <div className="input-group">
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            placeholder={label}
            className="input-field"
        />
    </div>
);

export default TextInput;
