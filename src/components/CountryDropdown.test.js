import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryDropdown from './CountryDropdown';
import { fetchCountries } from '../services/countryService';

jest.mock('../services/countryService');

test('renders CountryDropdown component', async () => {
    fetchCountries.mockResolvedValue(['Algeria', 'Angola']);

    const handleChange = jest.fn();
    render(<CountryDropdown value="" onChange={handleChange} name="country" />);

    const selectElement = await screen.findByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    fireEvent.change(selectElement, { target: { value: 'Angola' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});
