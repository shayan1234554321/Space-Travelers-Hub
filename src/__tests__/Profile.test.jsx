import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { beforeEach, describe } from 'vitest';
import configureStore from 'redux-mock-store';
import RocketProfile from '../components/RocketProfile';
import MissionProfile from '../components/MissionProfile';

describe('Profile', () => {
  let store;

  beforeEach(() => {
    store = configureStore()({
      rockets: [
        {
          id: 'rocket1',
          name: 'Rocket 1',
          reserved: true,
        },
        {
          id: 'rocket2',
          name: 'Rocket 2',
          reserved: false,
        },
      ],
      missions: {
        missions: [
          {
            id: 'mission1',
            name: 'Mission 1',
            reserved: true,
          },
          {
            id: 'mission2',
            name: 'Mission 2',
            reserved: false,
          },
        ],
      },
    });
  });

  describe('Profile', () => {
    it('renders RocketProfile without crashing', () => {
      const { container } = render(
        <Provider store={store}>
          <RocketProfile />
        </Provider>,
      );
      expect(container).toBeTruthy();
    });
    it('renders MissionProfile without crashing', () => {
      const { container } = render(
        <Provider store={store}>
          <MissionProfile />
        </Provider>,
      );
      expect(container).toBeTruthy();
    });
  });
});
