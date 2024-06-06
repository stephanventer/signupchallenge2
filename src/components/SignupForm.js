import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import CountryDropdown from './CountryDropdown';
import Checkbox from './Checkbox';
import SubmitButton from './SubmitButton';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        country: '',
        password: '',
        agreeToTerms: false
    });

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
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
            <TextInput
                label="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
            />
            <EmailInput
                value={formData.email}
                onChange={handleChange}
            />
            <CountryDropdown
                value={formData.country}
                onChange={handleChange}
                name="country"
            />
            <PasswordInput
                value={formData.password}
                onChange={handleChange}
            />
            <Checkbox
                label="I agree to the Terms of Service & Privacy Policy"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                name="agreeToTerms"
            />
            <SubmitButton label="Complete Sign-Up" />
        </form>
    );
};

export default SignupForm;
