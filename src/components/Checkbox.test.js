import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders Checkbox component', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="I agree to the Terms of Service & Privacy Policy" checked={false} onChange={handleChange} name="agreeToTerms" />);

    const checkboxElement = screen.getByLabelText(/I agree to the Terms of Service & Privacy Policy/i);
    expect(checkboxElement).toBeInTheDocument();

    fireEvent.click(checkboxElement);
    expect(handleChange).toHaveBeenCalledTimes(1);
});
