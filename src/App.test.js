// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OpcodeSpark title', () => {
    render(<App />);
    const titleElement = screen.getByText(/OpcodeSpark/i);
    expect(titleElement).toBeInTheDocument();
});
