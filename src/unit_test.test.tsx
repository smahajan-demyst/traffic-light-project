import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

jest.setTimeout(10000);

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

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

  act(() => {
    jest.advanceTimersByTime(4000);
  });
  await waitFor(() => expect(yellowLight).toHaveStyle('background-color: yellow'));

  act(() => {
    jest.advanceTimersByTime(1000);
  });
  await waitFor(() => expect(redLight).toHaveStyle('background-color: red'));

  act(() => {
    jest.advanceTimersByTime(3000);
  });
  await waitFor(() => expect(greenLight).toHaveStyle('background-color: green'));
});

