import React from 'react';
import ReactDOM from 'react-dom/client';
import Rocket from '../components/Rocket';
import { Provider } from 'react-redux';
import store from '../redux/store'

it('renders without crashing', () => {
  const data = {
    rocketImage: 'image',
    rocketId: 1,
    rocketName: 'm1',
    rocketDescription: 'rocket1',
    rocketStatus: true,
  };
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <Provider store={store}>
      <Rocket rocket={data} />
    </Provider>,
  );
});
