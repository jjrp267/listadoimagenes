import { render, screen } from '@testing-library/react';
import Imagecomponent from './Imagecomponent';

test('2.renders imagen', () => {

  const imageTest = {
    "id": 1,
    "randNumber": 3903,
    "photo": "https://picsum.photos/id/3903/367/267",
    "text": "3903random_lorem_ipsum_text"
  }

  render(<Imagecomponent id={imageTest.id} src={imageTest.photo} randNumber={imageTest.randNumber} alt={imageTest.text} />);
  const linkElement = screen.getByText(/imagen/i);
  expect(linkElement).toBeInTheDocument();
});
