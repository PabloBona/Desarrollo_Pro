import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

it('renders "Hello World!"', () => {
  render(<Hello />);
  const title = screen.getByText('Hello World!');
  expect(title).toBeInTheDocument();
});
