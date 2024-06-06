import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';

test('renders WelcomePage component', () => {
    render(
        <MemoryRouter initialEntries={[{ pathname: '/welcome', state: { fullName: 'John Doe', email: 'john@example.com', country: 'Angola' } }]}>
            <Routes>
                <Route path="/welcome" element={<WelcomePage />} />
            </Routes>
        </MemoryRouter>
    );

    const welcomeMessage = screen.getByText(/Welcome, John Doe!/i);
    expect(welcomeMessage).toBeInTheDocument();

    const emailText = screen.getByText(/Email: john@example.com/i);
    expect(emailText).toBeInTheDocument();

    const countryText = screen.getByText(/Country: Angola/i);
    expect(countryText).toBeInTheDocument();
});
