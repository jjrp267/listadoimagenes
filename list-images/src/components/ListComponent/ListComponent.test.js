import { render, screen } from '@testing-library/react';
import ListComponent from './ListComponent';

test('3.renders Lista de imagenes', () => {
  render(<ListComponent />);
  const linkElement = screen.getByText(/Lista de imagenes/i);
  expect(linkElement).toBeInTheDocument();
});
