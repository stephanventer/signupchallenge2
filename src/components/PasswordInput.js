import React from 'react';

const PasswordInput = ({ value, onChange }) => (
    <div className="input-group">
        <input
            type="password"
            name="password"
            value={value}
            onChange={onChange}
            required
            placeholder="Password"
            className="input-field"
        />
    </div>
);

export default PasswordInput;
