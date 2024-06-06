import React from 'react';

const Checkbox = ({ label, checked, onChange, name }) => (
    <div className="input-group">
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
            />
            {label}
        </label>
    </div>
);

export default Checkbox;
