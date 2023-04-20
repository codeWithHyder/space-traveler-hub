import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Loader from '../Components/Loader';

it('test loader render', () => {
  const { container } = render(<Loader />);
  const tree = renderer.create(<Loader />).toJSON();
  expect(container.firstChild.classList.contains('lds-ring')).toBe(true);
  expect(container.getElementsByClassName('lds-ring').length).toBe(1);
  expect(tree).toMatchSnapshot();
});
