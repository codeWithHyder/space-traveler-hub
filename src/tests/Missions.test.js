import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../Components/Missions';

it('renders Missions correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
