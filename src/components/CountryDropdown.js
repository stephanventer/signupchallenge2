import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countryService';

const CountryDropdown = ({ value, onChange, name }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            const countryList = await fetchCountries();
            setCountries(countryList);
        };

        getCountries();
    }, []);

    return (
        <div className="input-group">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="input-field"
            >
                <option value="" disabled>Select your country</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </select>
        </div>
    );
};

export default CountryDropdown;
