import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput component', () => {
    const handleChange = jest.fn();
    render(<TextInput label="Full Name" type="text" name="fullName" value="" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText(/Full Name/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'John Doe' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});