import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmailInput from './EmailInput';

test('renders EmailInput component', () => {
    const handleChange = jest.fn();
    render(<EmailInput value="" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText(/Email Address/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'john@example.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});
