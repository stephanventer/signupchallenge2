import React from 'react';

const EmailInput = ({ value, onChange }) => (
    <div className="input-group">
        <input
            type="email"
            name="email"
            value={value}
            onChange={onChange}
            required
            placeholder="Email Address"
            className="input-field"
        />
    </div>
);

export default EmailInput;
