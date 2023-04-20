import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Rockets from '../Components/Rockets';
import Rocket from '../Components/Rocket';
import RocketTest from './rockets/rocketsReducer';
import '@testing-library/jest-dom';

const rocket = {
  rocketName: 'Heloo',
  description: 'Heloof',
  flickrImages: 'Helookn',
  reserved: false,
  id: '2',
};

describe('Rockets must pass the test', () => {
  test('added Rockets must return data', () => {
    expect(RocketTest.addedRockets()).toBeDefined();
  });
  test('added Rockets return value length must be 4', () => {
    expect(RocketTest.addedRockets()).toHaveLength(4);
  });
  test('added Rockets must return name t', () => {
    expect(RocketTest.addedRockets()[3].description).toBe('easy taske done today');
  });
});

describe('Rockets component', () => {
  it('renders Rockets component', () => {
    const root = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(root).toMatchSnapshot();
  });
  it('renders Rocket component', () => {
    const root = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Rocket rocket={rocket} />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(root).toMatchSnapshot();
  });
});
