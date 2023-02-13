import { render, screen } from '@testing-library/react';
import App from './App';

test('4.renders Gestion de imagenes', () => {
  render(<App />);
  const linkElement = screen.getByText(/Gestion de imagenes/i);
  expect(linkElement).toBeInTheDocument();
});
