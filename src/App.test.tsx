import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders map text', () => {
  render(<App googleMapKey="" />);
  const linkElement = screen.getByText(/map goes here/i);
  expect(linkElement).toBeInTheDocument();
});
