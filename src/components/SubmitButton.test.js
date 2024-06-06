import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('renders SubmitButton component', () => {
    render(<SubmitButton label="Complete Sign-Up" />);

    const buttonElement = screen.getByText(/Complete Sign-Up/i);
    expect(buttonElement).toBeInTheDocument();
});
