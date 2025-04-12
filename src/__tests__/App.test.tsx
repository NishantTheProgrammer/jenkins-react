import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import App from '../App';

describe('App Component', () => {
  test('renders calculator title', () => {
    render(<App />);
    expect(screen.getByText(/Calculator/i)).toBeInTheDocument();
  });

  test('renders input fields and calculate button', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter first number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter second number')).toBeInTheDocument();
    expect(screen.getByText('Calculate')).toBeInTheDocument();
  });

  test('performs calculation correctly', () => {
    render(<App />);
    
    const num1Input = screen.getByPlaceholderText('Enter first number');
    const num2Input = screen.getByPlaceholderText('Enter second number');
    const calculateButton = screen.getByText('Calculate');

    // Input test values
    fireEvent.change(num1Input, { target: { value: '5' } });
    fireEvent.change(num2Input, { target: { value: '3' } });
    
    // Click calculate button
    fireEvent.click(calculateButton);

    // Result should be visible and correct
    expect(screen.getByText('8')).toBeInTheDocument();
  });

  test('handles empty inputs', () => {
    render(<App />);
    
    const calculateButton = screen.getByText('Calculate');
    
    // Click calculate without entering values
    fireEvent.click(calculateButton);
    
    // Result should be 0 when inputs are empty
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
