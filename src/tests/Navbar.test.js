import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../Components/Navbar';

it('test Navbar rendering', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  const title = screen.getByRole('heading', { name: /Space Travelers' Hub/i });
  const navbars = screen.getAllByRole('link');
  expect(title.textContent).toBe("Space Travelers' Hub");
  expect(navbars).toHaveLength(3);
  expect(tree).toMatchSnapshot();
});
