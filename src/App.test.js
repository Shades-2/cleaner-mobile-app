import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header text', () => {
  render(<App />);
  const header = screen.getByText(/Cleaner application/i);
  expect(header).toBeInTheDocument();
});
