import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignupForm from './SignupForm';

test('renders SignupForm component', () => {
    render(
        <MemoryRouter>
            <SignupForm />
        </MemoryRouter>
    );

    const formElement = screen.getByRole('form');
    expect(formElement).toBeInTheDocument();
});
