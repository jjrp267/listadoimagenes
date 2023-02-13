import { render, screen } from '@testing-library/react';
import Filtercomponent from './Filtercomponent';

test('1.renders Filtro de imagenes', () => {
  render(<Filtercomponent />);
  const linkElement = screen.getByText(/Filtro de imagenes/i);
  expect(linkElement).toBeInTheDocument();
});
