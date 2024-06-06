import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from './PasswordInput';

test('renders PasswordInput component', () => {
    const handleChange = jest.fn();
    render(<PasswordInput value="" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText(/Password/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'password123' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});
