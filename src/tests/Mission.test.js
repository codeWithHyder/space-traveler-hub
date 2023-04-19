import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  render,
  screen, fireEvent,
} from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import store from '../redux/store';
import Mission from '../Components/Mission';

it('renders Missions correctly', () => {
  const tree = renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>
    </React.StrictMode>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('join a mission', () => {
  const mockStore = configureMockStore();
  const initialState = {
    missions: {
      missions: [
        {
          id: '1',
          name: 'Thaicom',
          description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
        },
      ],
      isLoading: false,
    },

  };

  const store = mockStore(initialState);
  store.clearActions();
  render(
    <Provider store={store}>
      <Mission />
    </Provider>,
  );

  const joinButton = screen.getByRole('button', { name: /Join Mission/i });
  fireEvent.click(joinButton);

  expect(store.getActions()).toEqual([{ type: 'missions/joinMission' }]);
});
