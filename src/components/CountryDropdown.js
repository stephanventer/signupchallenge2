import React, { useEffect, useState } from 'react';

const CountryDropdown = ({ value, onChange, name }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            //TODO: Fetch countries from API (https://api.first.org/data/v1/countries)
            const countryList = ['Angola', 'Argentina', 'Australia', 'Brazil', 'Canada', 'China', 'France', 'Germany', 'India', 'Italy', 'Japan', 'Mexico', 'New Zealand', 'Russia', 'South Africa', 'South Korea', 'Turkey', 'United Kingdom', 'United States'];
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
