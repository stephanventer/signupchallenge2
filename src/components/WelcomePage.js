import React from 'react';
import { useLocation } from 'react-router-dom';

const WelcomePage = () => {
    const location = useLocation();
    const { fullName, email, country } = location.state;

    return (
        <div className="welcome-page">
            <h1>Welcome, {fullName}!</h1>
            <p>Email: {email}</p>
            <p>Country: {country}</p>
        </div>
    );
};

export default WelcomePage;
