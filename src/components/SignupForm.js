import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import CountryDropdown from './CountryDropdown';
import SubmitButton from './SubmitButton';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        country: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission logic

        // Navigate to welcome page with form data
        navigate('/welcome', { state: formData });
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form" role="form">
            <h2>Let's set up your account</h2>
            <EmailInput
                value={formData.email}
                onChange={handleChange}
            />
            <PasswordInput
                value={formData.password}
                onChange={handleChange}
            />
            <CountryDropdown
                value={formData.country}
                onChange={handleChange}
                name="country"
            />
            <SubmitButton label="Complete Sign-Up" />
        </form>
    );
};

export default SignupForm;
