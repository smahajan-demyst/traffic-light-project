import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

jest.setTimeout(10000);
test('renders traffic light', () => {
  render(<App />);
  const redLight = screen.getByRole('red-light');
  const yellowLight = screen.getByRole('yellow-light');
  const greenLight = screen.getByRole('green-light');
  expect(redLight).toBeInTheDocument();
  expect(yellowLight).toBeInTheDocument();
  expect(greenLight).toBeInTheDocument();
});

test('traffic light cycles through colors', async () => {
    
  render(<App />);
  const redLight = screen.getByRole('red-light');
  const yellowLight = screen.getByRole('yellow-light');
  const greenLight = screen.getByRole('green-light');

  expect(greenLight).toHaveStyle('background-color: green');
  
  await waitFor(() => expect(yellowLight).toHaveStyle('background-color: yellow'), { timeout: 4000 });
  await waitFor(() => expect(redLight).toHaveStyle('background-color: red'), { timeout: 5000 });
  await waitFor(() => expect(greenLight).toHaveStyle('background-color: green'), { timeout: 8000 });
});
